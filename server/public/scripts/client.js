console.log('js');
const app = angular.module('KoalaApp', []);
app.controller('KoalaController', ['$http', function ($http) {
    console.log('controller works ');
    let self = this;
    self.koalas = [];
    self.addKoala = function (newKoala) {
        console.log('click working');
        $http({
            url: '/koala',
            method: 'POST',
            data: newKoala
        }).then(function (response) {
            console.log('made it to POST', response);
            self.getKoalas();
        }).catch(function (error) {
            console.log('error in POST', error);
        })
    }
    self.getKoalas = function () {
        $http({
            url: '/koala',
            method: 'GET'
        }).then(function (response) {
            console.log('made it to GET', response);
            console.log(response.data);

            self.koalas = response.data
        }).catch(function (error) {
            console.log('error on GET', error);
        })
    }
    self.deleteKoala = function (id) {
        console.log('id of pet to delete', id);
        $http({
            url: `/koalas/${id}`,
            method: 'DELETE'
        }).then(function (response) {
            self.getKoalas();
            console.log(response);
        }).catch(function (error) {
            console.log('error response', error);
        })
    }

    self.getKoalas()
}])