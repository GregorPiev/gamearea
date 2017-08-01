'use strict';
gameAppl.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    console.log("%cConfig start", "color:orange");


    $stateProvider
            .state('Home', {
                url: '/',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrHome',
                        templateUrl: 'appl/Home/home.html'
                    }
                }
            })
            .state('Terms', {
                url: '/terms',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlTerms',
                        templateUrl: 'appl/Terms/terms.html'
                    }
                }
            })
            .state('ContactUs', {
                url: '/contactus',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlContact',
                        templateUrl: 'appl/Contact/contact.html'
                    }
                }
            })
            .state('Registration', {
                url: '/registration',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlRegistration',
                        templateUrl: 'appl/Registration/registration.html'
                    }
                }
            })
            .state('Account', {
                url: '/account',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlAccount',
                        templateUrl: 'appl/Account/account.html'
                    }
                }
            })
            .state('Recommendations', {
                url: '/recommendations',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlRecomendatins',
                        templateUrl: 'appl/Recomendations/recomendations.html'
                    }
                }
            })
            .state('Demo', {
                url: '/demo',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlDemo',
                        templateUrl: 'appl/Demo/demo.html'
                    }
                }
            })
            .state('Real', {
                url: '/real',
                views: {
                    stripwinners: {
                        controller: 'ctrlStripwinners',
                        templateUrl: 'appl/Stripwinners/stripwinners.html'
                    },
                    topmenu: {
                        controller: 'ctrlTopmenu',
                        templateUrl: 'appl/Topemenu/topmenu.html'
                    },
                    content: {
                        controller: 'ctrlReal',
                        templateUrl: 'appl/Real/real.html'
                    }
                }
            });
});

gameAppl.run();

angular.element(document).ready(function () {
    console.log("%cDocument ready", "color:brown");
    let $injector = angular.injector(['ng']);
    let $window = $injector.get("$window");
    let counter = $window.localStorage.getItem("counter");
    $window.localStorage.setItem("counter", ++counter);
});