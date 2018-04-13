export const EDITOR_CONFIG = {
    minWidth: '0',
    width: 'auto',
    height: 'auto',
    editable: true,
    spellcheck: true,
    translate: 'yes',
    showToolbar: true,
    minHeight: '300px',
    enableToolbar: true,
    placeholder: 'Enter text here...',
    toolbar: [
        [ 'bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript' ],
        // ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
        [ 'cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo' ],
        [ 'paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList' ],
        [ 'link', 'unlink', 'image' ],
        [ 'code' ]
    ]
};
