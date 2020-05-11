//Preregistration
if(window.innerWidth > 576 && $('#preregistration_form').length == 1){
    (function ($) {
        $('#select-country-pre').selectize({
            maxItems: 1,
            labelField: 'name',
            valueField: 'value',
            plugins: ['remove_button'],
            searchField: ['name', 'code'],
            preload: true,
            persist: false,
            render: {
                item: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='flagcolbig'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltextbig'>" + escape(item.name) + "</div></div></div>";
                },
                option: function(item, escape) {

                    return "<div class='container'><div class='row'><div class='flagcoloptionbig'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltextbig'>" + escape(item.name) + "</div></div></div>";
                }
            },
        });
    })(jQuery);
}else{
    (function ($) {
        $('#select-country-pre').selectize({
            maxItems: 1,
            labelField: 'name',
            valueField: 'value',
            plugins: ['remove_button'],
            searchField: ['name', 'code'],
            preload: true,
            persist: false,
            render: {
                item: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='flagcol'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltext'>" + escape(item.name) + "</div></div></div>";
                },
                option: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='flagcoloption'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltext'>" + escape(item.name) + "</div></div></div>";
                }
            },
        });
    })(jQuery);
}
$('#send_button_pre').on('click', function () {
    validatePlease('#preregistration_form', 'errorwindow-preregistration');
});

//#Preregistration

//Investor
if(window.innerWidth > 576 && $('#investor_form').length == 1){
    (function ($) {
        $('#select-country-inv').selectize({
            maxItems: 1,
            labelField: 'name',
            valueField: 'value',
            plugins: ['remove_button'],
            searchField: ['name', 'code'],
            preload: true,
            persist: false,
            render: {
                item: function(item, escape) {

                    return "<div class='container'><div class='row'><div class='flagcolbig'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltextbig'>" + escape(item.name) + "</div></div></div>";
                },
                option: function(item, escape) {

                    return "<div class='container'><div class='row'><div class='flagcoloptionbig'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltextbig'>" + escape(item.name) + "</div></div></div>";
                }
            },
        });
    })(jQuery);
}else{
    (function ($) {
        $('#select-country-inv').selectize({
            maxItems: 1,
            labelField: 'name',
            valueField: 'value',
            plugins: ['remove_button'],
            searchField: ['name', 'code'],
            preload: true,
            persist: false,
            render: {
                item: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='flagcol'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltext'>" + escape(item.name) + "</div></div></div>";
                },
                option: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='flagcoloption'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltext'>" + escape(item.name) + "</div></div></div>";
                }
            },
        });
    })(jQuery);
}
$('#send_button_investor').on('click', function () {
    validatePlease('#investor_form', 'errorwindow-investor');
});

//#Investor

//Profile
$('#save_button-profile').on('click', function () {
    validatePlease('#profileform', 'errorwindow-profile');
});
//#Profile

//Vacancy
if(window.innerWidth > 576 && $('#vacancy_form').length == 1){
    (function ($) {
        $('#select-country-vacancy').selectize({
            maxItems: 1,
            labelField: 'name',
            valueField: 'value',
            plugins: ['remove_button'],
            searchField: ['name', 'code'],
            preload: true,
            persist: false,
            render: {
                item: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='col-xs-4 flagcolbig'><span class='flag flag-" + escape(item.value) + "' /></div><div class='col-xs-8 flagcoltextbig'>" + escape(item.name) + "</div></div></div>";
                },
                option: function(item, escape) {

                    return "<div class='container'><div class='row'><div class='col-xs-4 flagcoloptionbig'><span class='flag flag-" + escape(item.value) + "' /></div><div class='col-xs-8 flagcoltextbig'>" + escape(item.name) + "</div></div></div>";
                }
            },
        });
    })(jQuery);
}else{
    (function ($) {
        $('#select-country-vacancy').selectize({
            maxItems: 1,
            labelField: 'name',
            valueField: 'value',
            plugins: ['remove_button'],
            searchField: ['name', 'code'],
            preload: true,
            persist: false,
            render: {
                item: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='flagcol'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltext'>" + escape(item.name) + "</div></div></div>";
                },
                option: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='flagcoloption'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltext'>" + escape(item.name) + "</div></div></div>";
                }
            },
        });
    })(jQuery);
}

$('#send_button_vacancy').on('click', function () {
    validatePlease('#vacancy_form', 'errorwindow-vacancy');
});
//#Vacancy

//Financing
if($('#financing-form').length == 1){
    (function ($) {
        $('#select-country-financing').selectize({
            maxItems: 1,
            labelField: 'name',
            valueField: 'value',
            plugins: ['remove_button'],
            searchField: ['name', 'code'],
            preload: true,
            persist: false,
            render: {
                item: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='flagcol'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltext'>" + escape(item.name) + "</div></div></div>";
                },
                option: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='flagcoloption'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltext'>" + escape(item.name) + "</div></div></div>";
                }
            },
        });
    })(jQuery);
}
//#Financing

// change country code based on selected country
$('select.selectized,input.selectized').each(function() {
    var update = function(e) {
        addCC($(this));
        adSize();
    }
    $(this).on('change', update);
    update();
});

//New add country code
function addCC($selector){
    switch($selector[0].value) {
        case'AF': $selector.parent().parent().children('.countrylabel').val('+93'); break;
        case'AX': $selector.parent().parent().children('.countrylabel').val('+358'); break;
        case'AL': $selector.parent().parent().children('.countrylabel').val('+355'); break;
        case'DZ': $selector.parent().parent().children('.countrylabel').val('+213'); break;
        case'AS': $selector.parent().parent().children('.countrylabel').val('+1 684'); break;
        case'AD': $selector.parent().parent().children('.countrylabel').val('+376'); break;
        case'AO': $selector.parent().parent().children('.countrylabel').val('+244'); break;
        case'AI': $selector.parent().parent().children('.countrylabel').val('+1 264'); break;
        case'AQ': $selector.parent().parent().children('.countrylabel').val('+672'); break;
        case'AG': $selector.parent().parent().children('.countrylabel').val('+1 268'); break;
        case'AR': $selector.parent().parent().children('.countrylabel').val('+54'); break;
        case'AM': $selector.parent().parent().children('.countrylabel').val('+374'); break;
        case'AW': $selector.parent().parent().children('.countrylabel').val('+297'); break;
        case'AU': $selector.parent().parent().children('.countrylabel').val('+61'); break;
        case'AT': $selector.parent().parent().children('.countrylabel').val('+43'); break;
        case'AZ': $selector.parent().parent().children('.countrylabel').val('+994'); break;
        case'BS': $selector.parent().parent().children('.countrylabel').val('+1 242'); break;
        case'BH': $selector.parent().parent().children('.countrylabel').val('+973'); break;
        case'BD': $selector.parent().parent().children('.countrylabel').val('+880'); break;
        case'BB': $selector.parent().parent().children('.countrylabel').val('+1 246'); break;
        case'BY': $selector.parent().parent().children('.countrylabel').val('+375'); break;
        case'BE': $selector.parent().parent().children('.countrylabel').val('+32'); break;
        case'BZ': $selector.parent().parent().children('.countrylabel').val('+501'); break;
        case'BJ': $selector.parent().parent().children('.countrylabel').val('+229'); break;
        case'BM': $selector.parent().parent().children('.countrylabel').val('+1 441'); break;
        case'BT': $selector.parent().parent().children('.countrylabel').val('+975'); break;
        case'BO': $selector.parent().parent().children('.countrylabel').val('+591'); break;
        case'BQ': $selector.parent().parent().children('.countrylabel').val('+599'); break;
        case'BA': $selector.parent().parent().children('.countrylabel').val('+387'); break;
        case'BW': $selector.parent().parent().children('.countrylabel').val('+267'); break;
        case'BV': $selector.parent().parent().children('.countrylabel').val('+47'); break;
        case'BR': $selector.parent().parent().children('.countrylabel').val('+55'); break;
        case'IO': $selector.parent().parent().children('.countrylabel').val('+246'); break;
        case'BN': $selector.parent().parent().children('.countrylabel').val('+673'); break;
        case'BG': $selector.parent().parent().children('.countrylabel').val('+359'); break;
        case'BF': $selector.parent().parent().children('.countrylabel').val('+226'); break;
        case'BI': $selector.parent().parent().children('.countrylabel').val('+257'); break;
        case'KH': $selector.parent().parent().children('.countrylabel').val('+855'); break;
        case'CM': $selector.parent().parent().children('.countrylabel').val('+237'); break;
        case'CA': $selector.parent().parent().children('.countrylabel').val('+1'); break;
        case'CV': $selector.parent().parent().children('.countrylabel').val('+238'); break;
        case'KY': $selector.parent().parent().children('.countrylabel').val('+1 345'); break;
        case'CF': $selector.parent().parent().children('.countrylabel').val('+236'); break;
        case'TD': $selector.parent().parent().children('.countrylabel').val('+235'); break;
        case'CL': $selector.parent().parent().children('.countrylabel').val('+56'); break;
        case'CN': $selector.parent().parent().children('.countrylabel').val('+86'); break;
        case'CX': $selector.parent().parent().children('.countrylabel').val('+61'); break;
        case'CC': $selector.parent().parent().children('.countrylabel').val('+61'); break;
        case'CO': $selector.parent().parent().children('.countrylabel').val('+57'); break;
        case'KM': $selector.parent().parent().children('.countrylabel').val('+269'); break;
        case'CG': $selector.parent().parent().children('.countrylabel').val('+242'); break;
        case'CD': $selector.parent().parent().children('.countrylabel').val('+243'); break;
        case'CK': $selector.parent().parent().children('.countrylabel').val('+682'); break;
        case'CR': $selector.parent().parent().children('.countrylabel').val('+506'); break;
        case'CI': $selector.parent().parent().children('.countrylabel').val('+225'); break;
        case'HR': $selector.parent().parent().children('.countrylabel').val('+385'); break;
        case'CU': $selector.parent().parent().children('.countrylabel').val('+53'); break;
        case'CW': $selector.parent().parent().children('.countrylabel').val('+599'); break;
        case'CY': $selector.parent().parent().children('.countrylabel').val('+357'); break;
        case'CZ': $selector.parent().parent().children('.countrylabel').val('+420'); break;
        case'DK': $selector.parent().parent().children('.countrylabel').val('+45'); break;
        case'DJ': $selector.parent().parent().children('.countrylabel').val('+253'); break;
        case'DM': $selector.parent().parent().children('.countrylabel').val('+1 767'); break;
        case'DO': $selector.parent().parent().children('.countrylabel').val('+1 809'); break;
        case'EC': $selector.parent().parent().children('.countrylabel').val('+593'); break;
        case'EG': $selector.parent().parent().children('.countrylabel').val('+20'); break;
        case'SV': $selector.parent().parent().children('.countrylabel').val('+503'); break;
        case'GQ': $selector.parent().parent().children('.countrylabel').val('+240'); break;
        case'ER': $selector.parent().parent().children('.countrylabel').val('+291'); break;
        case'EE': $selector.parent().parent().children('.countrylabel').val('+372'); break;
        case'ET': $selector.parent().parent().children('.countrylabel').val('+251'); break;
        case'FK': $selector.parent().parent().children('.countrylabel').val('+500'); break;
        case'FO': $selector.parent().parent().children('.countrylabel').val('+298'); break;
        case'FJ': $selector.parent().parent().children('.countrylabel').val('+679'); break;
        case'FI': $selector.parent().parent().children('.countrylabel').val('+358'); break;
        case'FR': $selector.parent().parent().children('.countrylabel').val('+33'); break;
        case'GF': $selector.parent().parent().children('.countrylabel').val('+594'); break;
        case'PF': $selector.parent().parent().children('.countrylabel').val('+689'); break;
        case'TF': $selector.parent().parent().children('.countrylabel').val('+262'); break;
        case'GA': $selector.parent().parent().children('.countrylabel').val('+241'); break;
        case'GM': $selector.parent().parent().children('.countrylabel').val('+220'); break;
        case'GE': $selector.parent().parent().children('.countrylabel').val('+995'); break;
        case'DE': $selector.parent().parent().children('.countrylabel').val('+49'); break;
        case'GH': $selector.parent().parent().children('.countrylabel').val('+233'); break;
        case'GI': $selector.parent().parent().children('.countrylabel').val('+350'); break;
        case'GR': $selector.parent().parent().children('.countrylabel').val('+30'); break;
        case'GL': $selector.parent().parent().children('.countrylabel').val('+299'); break;
        case'GD': $selector.parent().parent().children('.countrylabel').val('+1 473'); break;
        case'GP': $selector.parent().parent().children('.countrylabel').val('+590'); break;
        case'GU': $selector.parent().parent().children('.countrylabel').val('+1 671'); break;
        case'GT': $selector.parent().parent().children('.countrylabel').val('+502'); break;
        case'GG': $selector.parent().parent().children('.countrylabel').val('+44'); break;
        case'GN': $selector.parent().parent().children('.countrylabel').val('+224'); break;
        case'GW': $selector.parent().parent().children('.countrylabel').val('+245'); break;
        case'GY': $selector.parent().parent().children('.countrylabel').val('+592'); break;
        case'HT': $selector.parent().parent().children('.countrylabel').val('+509'); break;
        case'HM': $selector.parent().parent().children('.countrylabel').val('+672'); break;
        case'HN': $selector.parent().parent().children('.countrylabel').val('+504'); break;
        case'HK': $selector.parent().parent().children('.countrylabel').val('+852'); break;
        case'HU': $selector.parent().parent().children('.countrylabel').val('+36'); break;
        case'IS': $selector.parent().parent().children('.countrylabel').val('+354'); break;
        case'IN': $selector.parent().parent().children('.countrylabel').val('+91'); break;
        case'ID': $selector.parent().parent().children('.countrylabel').val('+62'); break;
        case'IR': $selector.parent().parent().children('.countrylabel').val('+98'); break;
        case'IQ': $selector.parent().parent().children('.countrylabel').val('+964'); break;
        case'IE': $selector.parent().parent().children('.countrylabel').val('+353'); break;
        case'IM': $selector.parent().parent().children('.countrylabel').val('+44'); break;
        case'IL': $selector.parent().parent().children('.countrylabel').val('+972'); break;
        case'IT': $selector.parent().parent().children('.countrylabel').val('+39'); break;
        case'JM': $selector.parent().parent().children('.countrylabel').val('+1 876'); break;
        case'JP': $selector.parent().parent().children('.countrylabel').val('+81'); break;
        case'JE': $selector.parent().parent().children('.countrylabel').val('+44'); break;
        case'JO': $selector.parent().parent().children('.countrylabel').val('+962'); break;
        case'KZ': $selector.parent().parent().children('.countrylabel').val('+7'); break;
        case'KE': $selector.parent().parent().children('.countrylabel').val('+254'); break;
        case'KI': $selector.parent().parent().children('.countrylabel').val('+686'); break;
        case'KP': $selector.parent().parent().children('.countrylabel').val('+850'); break;
        case'KR': $selector.parent().parent().children('.countrylabel').val('+82'); break;
        case'KW': $selector.parent().parent().children('.countrylabel').val('+965'); break;
        case'KG': $selector.parent().parent().children('.countrylabel').val('+996'); break;
        case'LA': $selector.parent().parent().children('.countrylabel').val('+856'); break;
        case'LV': $selector.parent().parent().children('.countrylabel').val('+371'); break;
        case'LB': $selector.parent().parent().children('.countrylabel').val('+961'); break;
        case'LS': $selector.parent().parent().children('.countrylabel').val('+266'); break;
        case'LR': $selector.parent().parent().children('.countrylabel').val('+231'); break;
        case'LY': $selector.parent().parent().children('.countrylabel').val('+218'); break;
        case'LI': $selector.parent().parent().children('.countrylabel').val('+423'); break;
        case'LT': $selector.parent().parent().children('.countrylabel').val('+370'); break;
        case'LU': $selector.parent().parent().children('.countrylabel').val('+352'); break;
        case'MO': $selector.parent().parent().children('.countrylabel').val('+853'); break;
        case'MK': $selector.parent().parent().children('.countrylabel').val('+389'); break;
        case'MG': $selector.parent().parent().children('.countrylabel').val('+261'); break;
        case'MW': $selector.parent().parent().children('.countrylabel').val('+265'); break;
        case'MY': $selector.parent().parent().children('.countrylabel').val('+60'); break;
        case'MV': $selector.parent().parent().children('.countrylabel').val('+960'); break;
        case'ML': $selector.parent().parent().children('.countrylabel').val('+223'); break;
        case'MT': $selector.parent().parent().children('.countrylabel').val('+356'); break;
        case'MH': $selector.parent().parent().children('.countrylabel').val('+692'); break;
        case'MQ': $selector.parent().parent().children('.countrylabel').val('+596'); break;
        case'MR': $selector.parent().parent().children('.countrylabel').val('+222'); break;
        case'MU': $selector.parent().parent().children('.countrylabel').val('+230'); break;
        case'YT': $selector.parent().parent().children('.countrylabel').val('+262'); break;
        case'MX': $selector.parent().parent().children('.countrylabel').val('+52'); break;
        case'FM': $selector.parent().parent().children('.countrylabel').val('+691'); break;
        case'MD': $selector.parent().parent().children('.countrylabel').val('+373'); break;
        case'MC': $selector.parent().parent().children('.countrylabel').val('+377'); break;
        case'MN': $selector.parent().parent().children('.countrylabel').val('+976'); break;
        case'ME': $selector.parent().parent().children('.countrylabel').val('+382'); break;
        case'MS': $selector.parent().parent().children('.countrylabel').val('+1 664'); break;
        case'MA': $selector.parent().parent().children('.countrylabel').val('+212'); break;
        case'MZ': $selector.parent().parent().children('.countrylabel').val('+258'); break;
        case'MM': $selector.parent().parent().children('.countrylabel').val('+95'); break;
        case'NA': $selector.parent().parent().children('.countrylabel').val('+264'); break;
        case'NR': $selector.parent().parent().children('.countrylabel').val('+674'); break;
        case'NP': $selector.parent().parent().children('.countrylabel').val('+977'); break;
        case'NL': $selector.parent().parent().children('.countrylabel').val('+31'); break;
        case'NC': $selector.parent().parent().children('.countrylabel').val('+687'); break;
        case'NZ': $selector.parent().parent().children('.countrylabel').val('+64'); break;
        case'NI': $selector.parent().parent().children('.countrylabel').val('+505'); break;
        case'NE': $selector.parent().parent().children('.countrylabel').val('+227'); break;
        case'NG': $selector.parent().parent().children('.countrylabel').val('+234'); break;
        case'NU': $selector.parent().parent().children('.countrylabel').val('+683'); break;
        case'NF': $selector.parent().parent().children('.countrylabel').val('+672'); break;
        case'MP': $selector.parent().parent().children('.countrylabel').val('+1 670'); break;
        case'NO': $selector.parent().parent().children('.countrylabel').val('+47'); break;
        case'OM': $selector.parent().parent().children('.countrylabel').val('+968'); break;
        case'PK': $selector.parent().parent().children('.countrylabel').val('+92'); break;
        case'PW': $selector.parent().parent().children('.countrylabel').val('+680'); break;
        case'PS': $selector.parent().parent().children('.countrylabel').val('+970'); break;
        case'PA': $selector.parent().parent().children('.countrylabel').val('+507'); break;
        case'PG': $selector.parent().parent().children('.countrylabel').val('+675'); break;
        case'PY': $selector.parent().parent().children('.countrylabel').val('+595'); break;
        case'PE': $selector.parent().parent().children('.countrylabel').val('+51'); break;
        case'PH': $selector.parent().parent().children('.countrylabel').val('+63'); break;
        case'PN': $selector.parent().parent().children('.countrylabel').val('+870'); break;
        case'PL': $selector.parent().parent().children('.countrylabel').val('+48'); break;
        case'PT': $selector.parent().parent().children('.countrylabel').val('+351'); break;
        case'PR': $selector.parent().parent().children('.countrylabel').val('+1'); break;
        case'QA': $selector.parent().parent().children('.countrylabel').val('+974'); break;
        case'RE': $selector.parent().parent().children('.countrylabel').val('+262'); break;
        case'RO': $selector.parent().parent().children('.countrylabel').val('+40'); break;
        case'RU': $selector.parent().parent().children('.countrylabel').val('+7'); break;
        case'RW': $selector.parent().parent().children('.countrylabel').val('+250'); break;
        case'BL': $selector.parent().parent().children('.countrylabel').val('+590'); break;
        case'SH': $selector.parent().parent().children('.countrylabel').val('+290'); break;
        case'KN': $selector.parent().parent().children('.countrylabel').val('+1 869'); break;
        case'LC': $selector.parent().parent().children('.countrylabel').val('+1 758'); break;
        case'MF': $selector.parent().parent().children('.countrylabel').val('+590'); break;
        case'PM': $selector.parent().parent().children('.countrylabel').val('+508'); break;
        case'VC': $selector.parent().parent().children('.countrylabel').val('+1 784'); break;
        case'WS': $selector.parent().parent().children('.countrylabel').val('+685'); break;
        case'SM': $selector.parent().parent().children('.countrylabel').val('+378'); break;
        case'ST': $selector.parent().parent().children('.countrylabel').val('+239'); break;
        case'SA': $selector.parent().parent().children('.countrylabel').val('+966'); break;
        case'SN': $selector.parent().parent().children('.countrylabel').val('+221'); break;
        case'RS': $selector.parent().parent().children('.countrylabel').val('+381'); break;
        case'SC': $selector.parent().parent().children('.countrylabel').val('+248'); break;
        case'SL': $selector.parent().parent().children('.countrylabel').val('+232'); break;
        case'SG': $selector.parent().parent().children('.countrylabel').val('+65'); break;
        case'SX': $selector.parent().parent().children('.countrylabel').val('+1 721'); break;
        case'SK': $selector.parent().parent().children('.countrylabel').val('+421'); break;
        case'SI': $selector.parent().parent().children('.countrylabel').val('+386'); break;
        case'SB': $selector.parent().parent().children('.countrylabel').val('+677'); break;
        case'SO': $selector.parent().parent().children('.countrylabel').val('+252'); break;
        case'ZA': $selector.parent().parent().children('.countrylabel').val('+27'); break;
        case'GS': $selector.parent().parent().children('.countrylabel').val('+500'); break;
        case'SS': $selector.parent().parent().children('.countrylabel').val('+211'); break;
        case'ES': $selector.parent().parent().children('.countrylabel').val('+34'); break;
        case'LK': $selector.parent().parent().children('.countrylabel').val('+94'); break;
        case'SD': $selector.parent().parent().children('.countrylabel').val('+249'); break;
        case'SR': $selector.parent().parent().children('.countrylabel').val('+597'); break;
        case'SJ': $selector.parent().parent().children('.countrylabel').val('+47'); break;
        case'SZ': $selector.parent().parent().children('.countrylabel').val('+268'); break;
        case'SE': $selector.parent().parent().children('.countrylabel').val('+46'); break;
        case'CH': $selector.parent().parent().children('.countrylabel').val('+41'); break;
        case'SY': $selector.parent().parent().children('.countrylabel').val('+963'); break;
        case'TW': $selector.parent().parent().children('.countrylabel').val('+886'); break;
        case'TJ': $selector.parent().parent().children('.countrylabel').val('+992'); break;
        case'TZ': $selector.parent().parent().children('.countrylabel').val('+255'); break;
        case'TH': $selector.parent().parent().children('.countrylabel').val('+66'); break;
        case'TL': $selector.parent().parent().children('.countrylabel').val('+670'); break;
        case'TG': $selector.parent().parent().children('.countrylabel').val('+228'); break;
        case'TK': $selector.parent().parent().children('.countrylabel').val('+690'); break;
        case'TO': $selector.parent().parent().children('.countrylabel').val('+676'); break;
        case'TT': $selector.parent().parent().children('.countrylabel').val('+1 868'); break;
        case'TN': $selector.parent().parent().children('.countrylabel').val('+216'); break;
        case'TR': $selector.parent().parent().children('.countrylabel').val('+90'); break;
        case'TM': $selector.parent().parent().children('.countrylabel').val('+993'); break;
        case'TC': $selector.parent().parent().children('.countrylabel').val('+1-649'); break;
        case'TV': $selector.parent().parent().children('.countrylabel').val('+688'); break;
        case'UG': $selector.parent().parent().children('.countrylabel').val('+256'); break;
        case'UA': $selector.parent().parent().children('.countrylabel').val('+380'); break;
        case'AE': $selector.parent().parent().children('.countrylabel').val('+971'); break;
        case'GB': $selector.parent().parent().children('.countrylabel').val('+44'); break;
        case'US': $selector.parent().parent().children('.countrylabel').val('+1'); break;
        case'UY': $selector.parent().parent().children('.countrylabel').val('+598'); break;
        case'UZ': $selector.parent().parent().children('.countrylabel').val('+998'); break;
        case'VU': $selector.parent().parent().children('.countrylabel').val('+678'); break;
        case'VA': $selector.parent().parent().children('.countrylabel').val('+39 06'); break;
        case'VE': $selector.parent().parent().children('.countrylabel').val('+58'); break;
        case'VN': $selector.parent().parent().children('.countrylabel').val('+84'); break;
        case'VG': $selector.parent().parent().children('.countrylabel').val('+1 284'); break;
        case'VI': $selector.parent().parent().children('.countrylabel').val('+1 340'); break;
        case'WF': $selector.parent().parent().children('.countrylabel').val('+681'); break;
        case'EH': $selector.parent().parent().children('.countrylabel').val('+212'); break;
        case'YE': $selector.parent().parent().children('.countrylabel').val('+967'); break;
        case'ZM': $selector.parent().parent().children('.countrylabel').val('+260'); break;
        case'ZW': $selector.parent().parent().children('.countrylabel').val('+263'); break;
    }
}
//New adjust size
function adSize(){
    var number_label;
    var number_input;
    var size;
    //Preregistration
    if($('#preregistration_form').length == 1){
        number_label = '2_number_label_pre';
        number_input = '2_number_input_pre';
        size = document.getElementById(number_label).value.length;
        if(window.innerWidth > 576){
            switch(size){
                case 2: document.getElementById(number_label).style.width = "41px";
                    document.getElementById(number_input).style.width = "210px";
                    break;
                case 3: document.getElementById(number_label).style.width = "47px";
                    document.getElementById(number_input).style.width = "204px";
                    break;
                case 4: document.getElementById(number_label).style.width = "55px";
                    document.getElementById(number_input).style.width = "196px";
                    break;
                case 6: document.getElementById(number_label).style.width = "68px";
                    document.getElementById(number_input).style.width = "183px";
                    break;
            }
        }else{
            switch(size){
                case 2: document.getElementById(number_label).style.width = "41px";
                    document.getElementById(number_input).style.width = "261px";
                    break;
                case 3: document.getElementById(number_label).style.width = "47px";
                    document.getElementById(number_input).style.width = "258px";
                    break;
                case 4: document.getElementById(number_label).style.width = "55px";
                    document.getElementById(number_input).style.width = "250px";
                    break;
                case 6: document.getElementById(number_label).style.width = "68px";
                    document.getElementById(number_input).style.width = "237px";
                    break;

            }
        }
    }
    //Investor
    if($('#investor_form').length == 1){
        number_label = '2_number_label_investor';
        number_input = '2_number_input_investor';
        size = document.getElementById(number_label).value.length;
        if(window.innerWidth > 576){
            switch(size){
                case 2: document.getElementById(number_label).style.width = "41px";
                    document.getElementById(number_input).style.width = "210px";
                    break;
                case 3: document.getElementById(number_label).style.width = "47px";
                    document.getElementById(number_input).style.width = "204px";
                    break;
                case 4: document.getElementById(number_label).style.width = "55px";
                    document.getElementById(number_input).style.width = "196px";
                    break;
                case 6: document.getElementById(number_label).style.width = "68px";
                    document.getElementById(number_input).style.width = "183px";
                    break;
            }
        }else{
            switch(size){
                case 2: document.getElementById(number_label).style.width = "41px";
                    document.getElementById(number_input).style.width = "261px";
                    break;
                case 3: document.getElementById(number_label).style.width = "47px";
                    document.getElementById(number_input).style.width = "258px";
                    break;
                case 4: document.getElementById(number_label).style.width = "55px";
                    document.getElementById(number_input).style.width = "250px";
                    break;
                case 6: document.getElementById(number_label).style.width = "68px";
                    document.getElementById(number_input).style.width = "237px";
                    break;

            }
        }
    }
    //Vacancy
    if($('#vacancy_form').length == 1){
        number_label = '2_user_countrycode_vac';
        number_input = '2_user_number_vac';
        size = document.getElementById(number_label).value.length;
        if(window.innerWidth > 576){
            switch(size){
                case 2: document.getElementById(number_label).style.width = "46px";
                    document.getElementById(number_input).style.width = "179px";
                    break;
                case 3: document.getElementById(number_label).style.width = "52px";
                    document.getElementById(number_input).style.width = "173px";
                    break;
                case 4: document.getElementById(number_label).style.width = "60px";
                    document.getElementById(number_input).style.width = "165px";
                    break;
                case 6: document.getElementById(number_label).style.width = "73px";
                    document.getElementById(number_input).style.width = "152px";
                    break;

            }
        }else{
            switch(size){
                case 2: document.getElementById(number_label).style.width = "46px";
                    document.getElementById(number_input).style.width = "264px";
                    break;
                case 3: document.getElementById(number_label).style.width = "52px";
                    document.getElementById(number_input).style.width = "258px";
                    break;
                case 4: document.getElementById(number_label).style.width = "60px";
                    document.getElementById(number_input).style.width = "249px";
                    break;
                case 6: document.getElementById(number_label).style.width = "73px";
                    document.getElementById(number_input).style.width = "238px";
                    break;

            }
        }
    }
    //Financing
    if($('#financing-form').length == 1){
        number_label = 'step1_number_label';
        number_input = 'step1_number_input';
        size = document.getElementById(number_label).value.length;
        if(window.innerWidth > 576){
            switch(size){
                case 2: document.getElementById(number_label).style.width = "41px";
                    document.getElementById(number_input).style.width = "314px";
                    break;
                case 3: document.getElementById(number_label).style.width = "47px";
                    document.getElementById(number_input).style.width = "308px";
                    break;
                case 4: document.getElementById(number_label).style.width = "55px";
                    document.getElementById(number_input).style.width = "300px";
                    break;
                case 6: document.getElementById(number_label).style.width = "68px";
                    document.getElementById(number_input).style.width = "287px";
                    break;
            }
        }else{
            switch(size){
                case 2: document.getElementById(number_label).style.width = "41px";
                    document.getElementById(number_input).style.width = "257px";
                    break;
                case 3: document.getElementById(number_label).style.width = "47px";
                    document.getElementById(number_input).style.width = "254px";
                    break;
                case 4: document.getElementById(number_label).style.width = "55px";
                    document.getElementById(number_input).style.width = "246px";
                    break;
                case 6: document.getElementById(number_label).style.width = "68px";
                    document.getElementById(number_input).style.width = "233px";
                    break;

            }
        }
    }
}
//Globe
$( ".selectize-input" ).click(function() {
    if($(this).parent().parent().children('select').val() != ""){
        $(this).parent().parent().parent().children('.globe').css('visibility' , 'hidden');
    }else{
        $(this).parent().parent().parent().children('.globe').css('visibility' , 'visible');
    }
});
$( ".selectize-input" ).focusout(function() {
    $(this).parent().parent().parent().children('.globe').css('visibility' , 'hidden');
});

//Validation
function validatePlease(form, errorwindow){

    $(form).parsley();
    $(form).parsley().validate();

    $(form).find('input').each(function () {
        $(this).on('change', function () {
            $('#' + errorwindow).css('display', 'none');
        });
    });

    $(form).parsley().on('field:error', function() {  //Gives proper error messages
        if($(this)[0].$element.attr('id') == 'test2'){
            $(this)[0].$element.parent().removeClass('parsley-error');
        }
        if($('#' + errorwindow).css('display') != 'none'){
            return;
        }
        switch(this.$element[0].id.substr(0,1)) { //gets the 1st number of id (default - text, 2 - number,  u - any sum, 4 - file 5 - email, 6 - checkbox)
            case "6":
                document.getElementById(errorwindow).innerHTML = translations.checkbox;
                break;
            case "5":
                document.getElementById(errorwindow).innerHTML = translations.email;
                break;
            case "2":
                document.getElementById(errorwindow).innerHTML = translations.phone;
                break;
            default:
                document.getElementById(errorwindow).innerHTML = translations.emptyfields;
                break;
        }
        $('#' + errorwindow).css('display', 'block');
    });
}

//Country selection jQuery
if(window.innerWidth > 576 && document.getElementsByClassName('financing1-section').length != 1){
    (function ($) {
        $('#select-country-only').selectize({
            maxItems: 1,
            labelField: 'name',
            valueField: 'value',
            plugins: ['remove_button'],
            searchField: ['name', 'code'],
            preload: true,
            persist: false,
            render: {
                item: function(item, escape) {

                    return "<div class='container'><div class='row'><div class='flagcolbig'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltextbig'>" + escape(item.name) + "</div></div></div>";
                },
                option: function(item, escape) {

                    return "<div class='container'><div class='row'><div class='flagcoloptionbig'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltextbig'>" + escape(item.name) + "</div></div></div>";
                }
            },
        });
        $('#select-country-only2').selectize({
            maxItems: 1,
            labelField: 'name',
            valueField: 'value',
            plugins: ['remove_button'],
            searchField: ['name', 'code'],
            preload: true,
            persist: false,
            render: {
                item: function(item, escape) {

                    return "<div class='container'><div class='row'><div class='flagcolbig'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltextbig'>" + escape(item.name) + "</div></div></div>";
                },
                option: function(item, escape) {

                    return "<div class='container'><div class='row'><div class='flagcoloptionbig'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltextbig'>" + escape(item.name) + "</div></div></div>";
                }
            },
        });
    })(jQuery);
}else{
    (function ($) {
        $('#select-country-only').selectize({
            maxItems: 1,
            labelField: 'name',
            valueField: 'value',
            plugins: ['remove_button'],
            searchField: ['name', 'code'],
            preload: true,
            persist: false,
            render: {
                item: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='flagcol'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltext'>" + escape(item.name) + "</div></div></div>";
                },
                option: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='flagcoloption'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltext'>" + escape(item.name) + "</div></div></div>";
                }
            },
        });
        $('#select-country-only2').selectize({
            maxItems: 1,
            labelField: 'name',
            valueField: 'value',
            plugins: ['remove_button'],
            searchField: ['name', 'code'],
            preload: true,
            persist: false,
            render: {
                item: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='flagcol'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltext'>" + escape(item.name) + "</div></div></div>";
                },
                option: function(item, escape) {
                    return "<div class='container'><div class='row'><div class='flagcoloption'><span class='flag flag-" + escape(item.value) + "' /></div><div class='flagcoltext'>" + escape(item.name) + "</div></div></div>";
                }
            },
        });
    })(jQuery);
}


//How did you learn of TB? selector @ profile page
$('#select-source').selectize({});


//Add new number input in profile page
$(document.getElementById('add_number')).on('click', function(){
    var html = '<input data-parsley-multiphonenumber data-parsley-minlength="1" data-parsley-errors-messages-disabled type="text" class="form-control-email profile_number" id="2" name="company[phones][]" autocomplete="off" autocorrect="off">';
    $( "#numbers_list" ).append( html );;
});

//Add new email input in profile page
$(document.getElementById('add_email')).on('click', function(){
    var html = '<input type="email" required="" data-parsley-trigger="change" id="5" data-parsley-errors-messages-disabled class="form-control-email" name="company[emails][]" autocomplete="off" autocorrect="off">';
    $( "#email_list" ).append( html );;
});

//Only check for password again if password is entered
$('#user_input_password').on('focusout', function () {
   if($('#user_input_password').val().length != 0){
       document.getElementById('user_input_password_again').setAttribute('required', '');
   }else{
       document.getElementById('user_input_password_again').removeAttribute('required');
   }
});

//Checks if secound password input is correct
function verifyPassword(){
    if($('#user_input_password').val() == $('#user_input_password_again').val()){
        return false;
    }else{
        return true;
    }
}
//Parsley custom validator
function checkNumber(value){
    //Checks if anything is written
    if(value.split('').length < 1){
        return true;
    }

    //Checks for any illigal characters
    for(j = 1; j < value.split('').length; j++){
        if(value.charCodeAt(j) == 43 || value.charCodeAt(j) == 32){
            continue;
        }
        if (value.charCodeAt(j) < 48 || value.charCodeAt(j) > 57){
            console.log('Troubled symbol: ' + value.charCodeAt(j));
            return false;
        }
    }
}
function checkAllNumbers(){
    var areas = document.getElementsByClassName('profile_number');
    var i;
    var j;
    for (i = 0; i < areas.length; i++){

        //Checks if anything is written
        if(areas[i].value.split('').length < 1){
            return true;
        }

        //Checks for any illigal characters
        for(j = 1; j < areas[i].value.split('').length; j++){
            if(areas[i].value.charCodeAt(j) == 43 || areas[i].value.charCodeAt(j) == 32){
                continue;
            }
            if (areas[i].value.charCodeAt(j) < 48 || areas[i].value.charCodeAt(j) > 57){
                console.log('Troubled symbol: ' + areas[i].value.charCodeAt(j));
                areas[i].value = '';
                return true;
            }
        }
    }
    return false;
}
window.Parsley.addValidator('multiphonenumber', {
    validateString: function(value) {
        console.log('value: ' + value);
        // return !checkAllNumbers();
        return checkNumber(value);
    },
});
window.Parsley.addValidator('verifypassword', {
    validateString: function() {
        return !verifyPassword();
    },
});

// //Checkkbox
// $('.checkboxcaption').on('click', function () {
//    if($(this).parent().children('input').attr('value') == 'on'){
//        $(this).parent().children('input').attr('value', 'off');
//    }else{
//        $(this).parent().children('input').attr('value' , 'on');
//    }
// });
// $(document).ready(function () {
//     $('.checkboxcaption').parent().children('input').attr('value', 'off');
// });
