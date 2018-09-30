import application from './core/application';
import moduleHeader from './modules/header';
import pageHome from './pages/home';

import '../styles/style.less';

// includes

// application

const applicationModules = [
  // modules
  { name: 'moduleHeader', content: moduleHeader },

  // pages
  { name: 'pageHome', content: pageHome, isActive: $('.page-home').length > 0 },
];

applicationModules.forEach(({
  name,
  content,
  isActive,
}) => {
  if (isActive) {
    application.register(name, content);
  }
});


$(() => {
  application.start();
});
