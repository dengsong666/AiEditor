import { Extension } from "@tiptap/vue-3";

export interface LineHeightOptions {
  types: string[];
  defaultHeight: string;
}

declare module "@tiptap/vue-3" {
  interface Commands<ReturnType> {
    lineHeight: {
      setLineHeight: (height: string) => ReturnType;
      unsetLineHeight: () => ReturnType;
    };
  }
}

export default Extension.create<LineHeightOptions>({
  name: "lineHeight",

  addOptions() {
    return {
      types: ["heading", "paragraph"],
      defaultHeight: "1em",
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: this.options.defaultHeight,
            parseHTML: (element) => element.style.lineHeight || this.options.defaultHeight,
            renderHTML: (attributes) => {
              return attributes.lineHeight === this.options.defaultHeight ? null : { style: `line-height: ${attributes.lineHeight}` };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setLineHeight:
        (height: string) =>
          ({ commands }) => {
            return this.options.types.every((type) => commands.updateAttributes(type, { lineHeight: height }));
          },

      unsetLineHeight:
        () =>
          ({ commands }) => {
            return this.options.types.every((type) => commands.resetAttributes(type, "lineHeight"));
          },
    };
  },
});