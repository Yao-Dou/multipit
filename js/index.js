var loose_json_filepath = "https://raw.githubusercontent.com/Yao-Dou/multipit/master/leaderboard_data/loose_identification_performance.json";
var strict_json_filepath = "https://raw.githubusercontent.com/Yao-Dou/multipit/master/leaderboard_data/strict_identification_performance.json";
var gen_json_filepath = "https://raw.githubusercontent.com/Yao-Dou/multipit/master/leaderboard_data/generation_performance.json";
var gen_metric_json_filepath = "https://raw.githubusercontent.com/Yao-Dou/multipit/master/leaderboard_data/generation_metrics.json";

$(document).ready(function() {

    var table = $('#loose_iden_leaderboard').DataTable({
        ajax: loose_json_filepath,
        columns: [
            {
                data:null,
                render: function(data, type, row, meta) {
                    if (meta["row"] == 0) {
                        console.log(row);
                        return '<span class="f3">🥇</span>';
                    } else if (meta["row"] == 1) {
                        return '<span class="f3">🥈</span>';
                    } else if (meta["row"] == 2) {
                        return '<span class="f3">🥉</span>';
                    }
                    return meta["row"] + 1;
                },
                orderable: false,
                searchable: false,
                targets: 0,
                className: "dt-right",
            },
            {
                data: 'Model',
                render: function(data, type, row, meta) {
                    return '<a href="' + row.URL + '" target="_blank" class="link dim black">' + data + '</a>';
                },
                orderable: false
            },
            {
                data: 'Date',
            },
            {
                data: 'Precision',
            },
            {
                data: 'Recall',
            },
            {
                data: 'Accuracy',
            },
            {
                data: 'F1',
            },
        ],
        columnDefs: [{
            "defaultContent": "-",
            "targets": "_all"
          }],
        lengthMenu: [
            [10, 20, -1],
            [10, 20, 'All'],
        ],
        // scrollX: true,
        scrollY: '80vh',
        scrollCollapse: true,
        paging: false,
        searching: true,
        info: false,
        dom: 't',
        order: [[6, 'desc']],
    });

    $('#strict_iden_leaderboard').DataTable({
        ajax: strict_json_filepath,
        columns: [
            {
                data:null,
                render: function(data, type, row, meta) {
                    if (meta["row"] == 0) {
                        console.log(row);
                        return '<span class="f3">🥇</span>';
                    } else if (meta["row"] == 1) {
                        return '<span class="f3">🥈</span>';
                    } else if (meta["row"] == 2) {
                        return '<span class="f3">🥉</span>';
                    }
                    return meta["row"] + 1;
                },
                orderable: false,
                searchable: false,
                targets: 0,
                className: "dt-right",
            },
            {
                data: 'Model',
                render: function(data, type, row, meta) {
                    return '<a href="' + row.URL + '" target="_blank" class="link dim black">' + data + '</a>';
                },
                orderable: false
            },
            {
                data: 'Date',
            },
            {
                data: 'Precision',
            },
            {
                data: 'Recall',
            },
            {
                data: 'Accuracy',
            },
            {
                data: 'F1',
            },
        ],
        columnDefs: [{
            "defaultContent": "-",
            "targets": "_all"
          }],
        lengthMenu: [
            [10, 20, -1],
            [10, 20, 'All'],
        ],
        // scrollX: true,
        scrollY: '80vh',
        scrollCollapse: true,
        paging: false,
        searching: true,
        info: false,
        dom: 't',
        order: [[6, 'desc']]
    });

    $('#gen_leaderboard').DataTable({
        ajax: gen_json_filepath,
        columns: [
            {
                data:null,
                render: function(data, type, row, meta) {
                    if (meta["row"] == 0) {
                        console.log(row);
                        return '<span class="f3">🥇</span>';
                    } else if (meta["row"] == 1) {
                        return '<span class="f3">🥈</span>';
                    } else if (meta["row"] == 2) {
                        return '<span class="f3">🥉</span>';
                    }
                    return meta["row"] + 1;
                },
                orderable: false,
                searchable: false,
                targets: 0,
                className: "dt-right",
            },
            {
                data: 'Model',
                render: function(data, type, row, meta) {
                    return '<a href="' + row.URL + '" target="_blank" class="link dim black">' + data + '</a>';
                },
                orderable: false
            },
            {
                data: 'Date',
            },
            {
                data: 'BERT-iBLEU',
            },
            {
                data: 'Self-BLEU',
            },
            {
                data: 'BERT-Score',
            },
            {
                data: 'BLEU',
            },
        ],
        columnDefs: [{
            "defaultContent": "-",
            "targets": "_all"
          }],
        lengthMenu: [
            [10, 20, -1],
            [10, 20, 'All'],
        ],
        // scrollX: true,
        scrollY: '80vh',
        scrollCollapse: true,
        paging: false,
        searching: true,
        info: false,
        dom: 't',
        order: [[3, 'desc']]
    });

    $('#gen_metrics').DataTable({
        ajax: gen_metric_json_filepath,
        columns: [
            {
                data:null,
                render: function(data, type, row, meta) {
                    if (meta["row"] == 0) {
                        console.log(row);
                        return '<span class="f3">🥇</span>';
                    } else if (meta["row"] == 1) {
                        return '<span class="f3">🥈</span>';
                    } else if (meta["row"] == 2) {
                        return '<span class="f3">🥉</span>';
                    }
                    return meta["row"] + 1;
                },
                orderable: false,
                searchable: false,
                targets: 0,
                className: "dt-right",
            },
            {
                data: 'Metric',
                render: function(data, type, row, meta) {
                    // if data = " ", then don't add link
                    if (row.URL == " ") {
                        return data;
                    }
                    return '<a href="' + row.URL + '" target="_blank" class="link dim black">' + data + '</a>';
                },
                orderable: false
            },
            {
                data: 'Referenceless',
            },
            {
                data: 'Fluency Correlation',
            },
            {
                data: 'Semantic Similarity Correlation',
            },
            {
                data: 'Diversity Correlation',
            },
            {
                data: 'Overall Correlation',
            },
        ],
        columnDefs: [{
            "defaultContent": "-",
            "targets": "_all"
          }],
        lengthMenu: [
            [10, 20, -1],
            [10, 20, 'All'],
        ],
        // scrollX: true,
        scrollY: '80vh',
        scrollCollapse: true,
        paging: false,
        searching: true,
        info: false,
        dom: 't',
        order: [[6, 'desc']]
    });

    table.on( 'order.dt search.dt', function () {
        table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            if (i == 0) {
                cell.innerHTML = '<span class="f3">🥇</span>';
            } else if (i == 1) {
                cell.innerHTML = '<span class="f3">🥈</span>';
            } else if (i == 2) {
                cell.innerHTML = '<span class="f3">🥉</span>';
            } else {
                cell.innerHTML = i + 1;
            }
        } );
    } ).draw();

    $('#search-box').keyup(function(){
        table.search($(this).val()).draw() ;
        table.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            if (i == 0) {
                cell.innerHTML = '<span class="f3">🥇</span>';
            } else if (i == 1) {
                cell.innerHTML = '<span class="f3">🥈</span>';
            } else if (i == 2) {
                cell.innerHTML = '<span class="f3">🥉</span>';
            } else {
                cell.innerHTML = i + 1;
            }
        } );
    })

    $(".leaderboard-type").on("click", function() {
        var leaderboard_id = $(this).attr("data-leaderboard-id");
        // if current .leaderboard-type has class selected_leaderboard, do nothing
        if ($(this).hasClass("selected_leaderboard")) {
            return;
        }
        // remove the selected_leaderboard class from other .leaderboard-type
        $(".leaderboard-type").removeClass("selected_leaderboard");
        // add the selected_leaderboard class to the current .leaderboard-type
        $(this).addClass("selected_leaderboard");
        // remove active class from other .leaderboard_div
        $(".leaderboard_div").removeClass("active");
        // add active class to the current .leaderboard_div
        $("#" + leaderboard_id + "_div").addClass("active");

        $("#search-box").val("");
        table = $('#' + leaderboard_id).DataTable();
        table.search("").draw() ;
    });
});
