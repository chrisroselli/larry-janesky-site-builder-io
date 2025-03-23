"use client";
import { builder, Builder } from "@builder.io/react";
import Hero from "./app/components/Hero";
import Teacher from "./app/components/Teacher";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Teacher. Leader. Speaker. Innovator. Author.",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue:
        "A highly successful author of five books, acclaimed speaker, inventor with 29 patents, and a business leader with 31 years of industry knowledge and real-world accountability. Larry Janesky is an expert in teaching contractors how to generate growth for their businesses.",
    },
  ],
});

Builder.registerComponent(Teacher, {
  name: "Teacher",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Teacher",
    },
    {
      name: "text",
      type: "string",
      defaultValue:
        "A highly successful author of five books, acclaimed speaker, inventor with 29 patents, and a business leader with 31 years of industry knowledge and real-world accountability.",
    },
    {
      name: "button",
      type: "object",
      subFields: [
        {
          name: "text",
          type: "string",
          defaultValue: "Join the School for free today"
        },
        {
          name: "link",
          type: "string",
          defaultValue: "https://www.thesoe.com/"
        }
      ]
    },  
  ],
});
