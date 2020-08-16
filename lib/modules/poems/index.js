module.exports = {
  extend: "apostrophe-pieces",
  name: "poem",
  label: "Poem",
  pluralLabel: "Poems",
  addFields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
    },
    {
      name: "subTitle",
      label: "sub-title",
      type: "string",
    },
    {
      name: "body",
      label: "Body",
      type: "area",
      options: {
        widgets: {
          "apostrophe-rich-text": {
            toolbar: ["Bold", "Italic", "Link", "Unlink"],
          },
          "apostrophe-images": {},
        },
      },
    },
  ],
};
