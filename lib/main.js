module.exports =  {
  activate() {
    if (!atom.grammars.addInjectionPoint) return

    atom.grammars.addInjectionPoint('source.js', { // TODO: support '*' selector
      type: 'comment',
      language (callNode) { return 'todo' },
      content (comment) { return comment }
    });
  }
}
