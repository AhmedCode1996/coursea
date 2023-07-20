import { courses } from "./courses";

export const mappedCourses = courses.map((course) => {
  const {
    id,
    title,
    category,
    level,
    rating,
    duration,
    sections,
    students,
    is_paid,
    price,
    price_detail,
    visible_instructors: [
      {
        name: instructor_name,
        job_title: instructor_job,
        image_100x100: instructor_image,
      },
    ],
    image_480x270: course_image,
    locale: { title: course_language },
    headline: course_headline,
  } = course;
  return {
    id,
    title,
    rating,
    category,
    level,
    duration,
    sections,
    students,
    is_paid,
    price,
    price_detail,
    course_headline,
    course_image,
    course_language,
    instructor_name,
    instructor_job,
    instructor_image,
  };
});
