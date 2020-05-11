var range = $('.input-range');
var value = $('.range-value')

$('.range-slider').each(function(){ // Sets value based on range slider
    refresh();
    calc_total();
    set_range_value();
    addSpaces();
    range.on('input', function(){
        $output_el = $(this).data('el');
        $($output_el).val(this.value);
        calc_total();
        set_range_value();
        adjust_slider_background();
        addSpaces();
    });
});

function set_range_value(){ //Sets range value inputbox width based on it's length
    value.each(function(){
        if(this.value.length < 1){
            this.style.width = 15 + 'px';
        } else {
            this.style.width = ((this.value.length) * 11) + 4 + 'px';
        }
    });
}

function calc_total(){ // Administration formula ???
    var goods_price = parseFloat($("#range_goods_price").val()); //#range_good_price
    var loan_days = parseFloat($("#range_loan_days").val()); //#range_loadn_days
    var prepayment = parseFloat($("#prepayment").val());
    var administration_fee = parseFloat($("#administration").val());
    var interest_rate = parseFloat($("#per-year").val());
    var prepayment_result = goods_price*prepayment/100;
    var capital = goods_price - prepayment_result;
    var interest_rate_result = Math.round((capital / 36000 * interest_rate * loan_days)*100)/100;
    var administration_fee_result = capital * administration_fee /100;
    var total = Math.round((goods_price + interest_rate_result + administration_fee_result)*100)/100;
    $("#prepayment-result").html(prepayment_result);
    $("#per-year-result").html(interest_rate_result);
    $("#administration-result").html(administration_fee_result);
    $("#result").html(total);
    $("#total_repay").html(total.toFixed(2));
}

function refresh(){     //Resets slider values
    $("#range_goods_price").val(1750000);
    $("#range_loan_days").val(30);
    $(".range-value_goods_price").val(1750000);
    $(".range-value_loan_days").val(30);
}

function update_form(){ // Sets same values from visible input to form which data get sent
    var text = $("#value_goods_price").val();
    text = text.replace(/\s/g, '');
    $("#form_goods_price").val(text);
    text = $("#value_loan_days").val();
    text = text.replace(/\s/g, '');
    $("#form_loan_days").val(text);
}

value.on('keypress', function (e) { //value.keypress(function (e) {
    //if the letter is not digit then don't type anything
    if ((e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57))) {
        return false;
    }

    if (!this.value.match(/[0-9 ]+$/)) { // Checks if there are any letters in inputbox
        this.value = 0;
    }
    this.value = this.value.replace(/^0+/, ''); //Removes any 0 before number


    var max = $(this).data('max');
    if(this.value > max){
        this.value = max;
    } else if(this.value < 0){
        this.value = 0;
    }

    if(e.which === 8) {
        if((this.value.length <=1)){
            this.style.width = 13 + 'px';
        } else {
            this.style.width = ((this.value.length - 1) * 11) + 4 + 'px';
        }
    } else if(e.which != 0) {
        this.style.width = ((this.value.length + 1) * 11) + 4 + 'px';
    }
    update_form();
});

value.on('keyup', function (e) {
    var max = $(this).data('max');
    if (!this.value.match(/[0-9 ]+$/)) { // Checks if there are any letters in inputbox
        this.value = 0;
    }
    if (this.value > max){
        this.value = max;
    }
    if(this.value.length <= 1){
        $output_el = $(this).data('el');
        $($output_el).val(1);
    } else {
        $output_el = $(this).data('el');
        $($output_el).val(this.value);
    }
    set_range_value();
    calc_total();
    adjust_slider_background();
    update_form();
});

value.on('blur', function(){ // Sets slider position from value && checks
    var max = $(this).data('max');
    var min = $(this).data('min');
    if (!this.value.match(/^\d+$/)) { // Checks if there are any letters in inputbox
        this.value = 0;
    }
    if(this.value > max){
        this.value = max;
    } else if(this.value < min){
        this.value = min;
    }
    this.style.width = ((this.value.length + 1 - 1) * 11) + 4 + 'px';
    if(this.value.length == 0){
        this.style.width = 15+'px';
    }

    calc_total();
    update_form();
    adjust_slider_background();
    addSpaces();
});

function addSpaces(){ // Adds spaces to value of goods prices and total price
    var text = $("#value_goods_price").val();
    text = text.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    $("#value_goods_price").val(text);
    text = $("#total_repay").html();
    text = text.replace(/\B(?=(\d{3})+(?!\d))/g, "&nbsp;");
    $("#total_repay").html(text);
    $("#value_goods_price").each(function(){
        if(this.value.length < 1){
            this.style.width = 15 + 'px';
        } else {
            this.style.width = ((this.value.length) * 10) + 4 + 'px';
        }
    });
}

value.focus(function () { // Removes any spaces when focusing range slider value
    var text = $(this).val();
    text = text.replace(/\s/g, '');
    $(this).val(text);
    this.style.width = ((this.value.length + 1 - 1) * 11) + 4 + 'px';
});

value.click(function(){ // Selects all text in range slider value
    this.selectionStart = 0;
    this.selectionEnd = this.value.length;
});

function adjust_slider_background() {
    $("input[type=range]").each(function () {
        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
        var percent = val * 100;

        $(this).css('background-image',
            '-webkit-gradient(linear, left top, right top, ' +
            'color-stop(' + percent + '%, #1C306B), ' +
            'color-stop(' + percent + '%, #F1F1F1)' +
            ')');

        $(this).css('background-image',
            '-moz-linear-gradient(left center, #1C306B 2%, #1C306B ' + percent + '%, #F1F1F1 ' + percent + '%, #F1F1F1 98%)');

    })
}

