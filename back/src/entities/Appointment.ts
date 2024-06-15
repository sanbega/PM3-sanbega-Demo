import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name : "appointments"})


class Appointment {

    @PrimaryGeneratedColumn()
    id!: number;


    @Column()
    date!: Date;

    @Column()
    time!: string;

    @Column()
    userId!: number;

    // @Column({
    //     default:"active",
    // })
    // status!: string;

    @Column({default: true})
    status!: boolean;

    @Column()
    description!: string;
}


export default Appointment;