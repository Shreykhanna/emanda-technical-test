import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from "typeorm";

@Entity()
@Tree("closure-table") 
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @TreeParent()
  parent?: Task;

  @TreeChildren()
  subtasks!: Task[];
}
