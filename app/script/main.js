/**
 * Created by Amitesh on 7/3/2017.
 */
var myApp = angular.module("myApp",['ui.router'])
 .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home')
        $stateProvider
        .state('home',{
          url:'/home',
          controller:'homeController',
          templateUrl:'./app/components/home/home.html'
        })
        .state('products',{
            url:'/products',
            controller:'productController',
            templateUrl:'./app/components/products/products.html'
        })
    })
$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
            margin:20,
        responsive:{
            0:{items:2},
            600:{items:3},
            1000:{items:5},
        }
    });
});