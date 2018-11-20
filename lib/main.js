module.exports =  {
  activate() {
    if (!atom.grammars.addInjectionPoint) return

    console.log("Adding injection point...")

    atom.grammars.addInjectionPoint('source.js', {
      type: 'comment',
      language (callNode) { return 'todo' },
      content (comment) { return comment }
    });

    console.log("added!");
  }
}

// TOD: wd wdaw

/**

COMBAK: add @param 

*/
