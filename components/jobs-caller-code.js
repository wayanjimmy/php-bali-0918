export const jobsCallerCode = `
<?php

use App\\Jobs\\CloseOrder;

dispatch(new CloseOrder($order, $delay = 500));
`
