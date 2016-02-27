var publicAssets = "./public/assets";
var sourceFiles  = "./gulp/assets";

module.exports = {
  publicAssets: publicAssets,
  browserSync: {
    proxy: 'localhost:3000',
    files: ['./app/views/**']
  },
  sass: {
    src: sourceFiles + "/stylesheets/**/*.{sass,scss}",
    dest: publicAssets + "/stylesheets",
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: '/assets/images' // Used by the image-url helper
    }
  },
  js: {
    src: sourceFiles + "/javascripts/{**/*.js.jsx,*.js}"
  }
};
