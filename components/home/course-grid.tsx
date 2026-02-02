import { Container } from "@/components/container";
import { CourseCard } from "@/components/ui/course-card";
import { courses } from "@/constants";
import { BlurFade } from "../ui/blur-fade";

export function CourseGrid() {
  return (
    <Container
      as="section"
      className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {courses.map((course, index) => (
        <BlurFade key={course.name} delay={0.15 + index * 0.05} direction="up" inView>
          <CourseCard
            key={course.name}
            name={course.name}
            description={course.description}
            semester={course.semester}
            sks={course.sks}
            icon={course.icon}
          />
        </BlurFade>
      ))}
    </Container>
  );
}
