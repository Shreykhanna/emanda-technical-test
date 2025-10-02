import { Injectable } from "@nestjs/common";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource, TreeRepository } from "typeorm";
import { Task } from "./entities/tasks.entity";
import { CreateTaskDto } from "./dto/create-task.dto";

@Injectable()
export class TasksService {
  private readonly tasksRepo: TreeRepository<Task>;

  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.tasksRepo = this.dataSource.getTreeRepository(Task);
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new Task();
    task.title = createTaskDto.title;

    if (createTaskDto.parentId) {
      task.parent =
        (await this.tasksRepo.findOneBy({ id: createTaskDto.parentId })) ??
        undefined;
    }

    return this.tasksRepo.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.tasksRepo.findTrees();
  }

  async findOne(id: number): Promise<Task | null> {
    const task = await this.tasksRepo.findOneBy({ id });
    return task ? this.tasksRepo.findDescendantsTree(task) : null;
  }
}
