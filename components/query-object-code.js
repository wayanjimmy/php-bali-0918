export const beforeCode = `
<?php

namespace App\\Http\\Controllers;

use App\\Models\\Stock;

class StocksController extends Controller
{
  public function index()
  {
    $keyword = request('search');

    $stocks = Stock::query()
      ->with('product', 'product.category', 'branch')
      ->leftJoin('products', function ($join) {
          $join->on('stocks.product_id', 'products.id');
      })
      ->leftJoin('branches', function ($join) {
          $join->on('stocks.branch_id', 'branches.id');
      })
      ->when($keyword, function ($query) use($keyword) {
          return $query
            ->where('stock', 'like', "%{$keyword}%")
            ->orWhere('product_name', 'ilike', "%{$keyword}%")
            ->orWhere('branch_name', 'ilike', "%{$keyword}%");
      })
      ->selectRaw('stocks.*, products.name as product_name, branches.name as branch_name')
      ->paginate(request('per_page'));

    return response()->json(compact('stocks'));
  }
}
`

export const afterCode = `
<?php // app/Queries/SearchStocks.php

namespace App\\Queries;

use App\\Models\\Stock;
use Illuminate\\Contracts\\Pagination\\Paginator;

final class SearchStocks
{
  public static function get($perPage = 20): Paginator
  {
    $keyword = request('search');

    return Stock::query()
      ->with('product', 'product.category', 'branch')
      ->leftJoin('products', function ($join) {
          $join->on('stocks.product_id', 'products.id');
      })
      ->leftJoin('branches', function ($join) {
          $join->on('stocks.branch_id', 'branches.id');
      })
      ->when($keyword, function ($query) use($keyword) {
          return $query
            ->where('stock', 'like', "%{$keyword}%")
            ->orWhere('product_name', 'ilike', "%{$keyword}%")
            ->orWhere('branch_name', 'ilike', "%{$keyword}%");
      })
      ->selectRaw('stocks.*, products.name as product_name, branches.name as branch_name')
      ->paginate($perPage);
  }
}
`

export const callerCode = `
<?php

use App\\Queries\\SearchStocks;

class StocksController extends Controller
{
  public function index()
  {
    $stocks = SearchStocks::get();

    return response()->json(compact('stocks'));
  }
}
`
