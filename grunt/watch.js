module.exports = {

  options: {
    livereload: true
  },

  default: {
    files: ['less/*.less', 'dev/*.html', 'js/*.js'],
    tasks: ['less', 'babel', 'browserify', 'uglify', 'includes'],
  },

};