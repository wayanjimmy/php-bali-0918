export const jobsCode = `
<?php // app/Jobs/CloseOrder.php

namespace App\\Jobs;

use App\\Models\\Order;

class CloseOrder
{
    protected $order;

    public function __construct(Order $order, $delay)
    {
        $this->order = $order;
        $this->delay($delay);
    }

    public function handle()
    {
        if ($this->order->paid_at) {
            return;
        }

        \DB::transaction(function() {
          // ...
        });
    }
}
`
