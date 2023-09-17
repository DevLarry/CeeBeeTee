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
import { RegisteredModule } from './registered/registered.module';
import { OptionModule } from './option/option.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [
    UserModule,
    StaffModule,
    QuestionModule,
    StudentModule,
    DepartmentModule,
    CourseModule,
    RegisteredModule,
    OptionModule,
    AuthModule,
    SchoolModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, AuthService],
})
export class AppModule {}
