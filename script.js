(function () {
    const store = window.DirectFarm || window.authService;
    if (!store) {
        return;
    }

    window.DirectFarmUtils = {
        formatCurrency: function (num) {
            return "₹" + Number(num || 0).toFixed(2);
        },
        formatDate: function (dateStr) {
            return new Date(dateStr).toLocaleDateString("en-IN", {
                month: "short", day: "numeric", year: "numeric"
            });
        }
    };
})();
