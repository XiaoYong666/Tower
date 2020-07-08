<template>
  <div class="editorPage">
    <div id="vditor"></div>
  </div>
</template>

<script>
import Vditor from "vditor";

export default {
  data() {
    return {
      editorConfig: {
        toolbar: [
          "headings",
          "bold",
          "italic",
          "strike",
          "link",
          "|",
          "list",
          "ordered-list",
          "check",
          "outdent",
          "indent",
          "|",
          "quote",
          "line",
          "code",
          "inline-code",
          "insert-before",
          "insert-after",
          "|",
          "table",
          "|",
          "undo",
          "redo",
          "|",
          "fullscreen",
          "edit-mode",
          {
            name: "more",
            toolbar: [
              "both",
              "export",
              "outline",
              "preview",
              "format",
              "info",
              "help"
            ]
          }
        ],
        toolbarConfig: {
          pin: true
        },
        preview: {
          hljs: {
            lineNumber: true
          },
          markdown: {
            chinesePunct: true,
            footnotes: true,
            paragraphBeginningSpace: true
          },
          math: {
            inlineDigit: true,
            engine: "KaTeX"
          }
        },
        mode: "sv",
        minHeight: 900,
        after: () => {
          //this.editor.setValue("Hello, Vue + Vditor!");
        }
      }
    };
  },
  mounted(){
      this.editor = new Vditor("vditor", this.editorConfig);
  }
};
</script>

<style scoped lang="less">
.editorPage{
    position: relative;
    z-index:3;
    
}
</style>