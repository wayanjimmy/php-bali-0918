export const routeVerbsCode = `
<?php

// good
Route::get('/', 'HomeController@index');
Route::get('open-source', 'OpenSourceController@index');

//bad
Route::get('', 'HomeController@index');
Route::get('/open-source', 'OpenSourceController@index');
`
