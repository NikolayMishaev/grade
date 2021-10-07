export default function () {
    $(".tabs").on("click", function (e) {
        if (e.target.closest(".tabs__tab")) {
            const idVisibleSection = $(this)
                .find(".tabs__tab[aria-selected=true]")
                .attr("aria-selected", "false")
                .attr("aria-controls");
            const idHiddenSection = $(e.target)
                .attr("aria-selected", "true")
                .attr("aria-controls");
            $(`#${idVisibleSection}`).attr("hidden", "");
            $(`#${idHiddenSection}`).removeAttr("hidden");
        }
    });
}
