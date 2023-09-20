import { defineType, type SchemaTypeDefinition } from "sanity";

const Events = defineType({
  name: "event",
  title: "Event",
  type: "document",
  preview: { select: { title: "title" } },
  fields: [
    {
      type: "text",
      name: "title",
      title: "Event title",
      placeholder:
        "Archifest Singapore 2023\nIn conversation with Manuel Der Hagopian",
    },

    {
      type: "text",
      name: "details",
      title: "Event details",
      placeholder: "August 23, 2024\nVirtual Event\nZoom",
    },

    {
      type: "text",
      name: "description",
      title: "Event description",
      placeholder:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero urna, lacinia sit amet lacus tempus, congue eleifend leo. Donec pellentesque lectus egestas tortor convallis, in consequat justo sollicitudin. In semper elit quis justo gravida, sit amet varius urna blandit. In hendrerit viverra.",
    },

    {
      type: "image",
      name: "thumbnail",
    },

    {
      type: "datetime",
      name: "datetimeStart",
      title: "Start of Event",
      description: "For generation of .cal file",
    },

    {
      type: "datetime",
      name: "datetimeEnd",
      title: "End of Event",
      description: "For generation of .cal file",
    },

    {
      type: "string",
      name: "venue",
      title: "Event Venue",
      description: "For generation of .cal file",
    },

    {
      type: "string",
      name: "url",
      title: "Event URL (optional)",
      description: "For generation of .cal file",
    },

    {
      type: "string",
      name: "orderRank",
      title: "Order",
      hidden: true,
    },
  ],
});

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Events],
};
