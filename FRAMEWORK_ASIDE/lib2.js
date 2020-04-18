var libraryName = 'lib2'; // overrides lib1 variable

window.globalVariable = window.globalVariable || 'lib2_var';  // if there is not globalVariable assigned before it will be initialized with lib2_var