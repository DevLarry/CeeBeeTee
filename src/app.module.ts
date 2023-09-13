import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { StaffModule } from './staff/staff.module';
import { QuestionModule } from './question/question.module';
import { StudentModule } from './student/student.module';
import { DepartmentModule } from './department/department.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [UserModule, StaffModule, QuestionModule, StudentModule, DepartmentModule, CourseModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
