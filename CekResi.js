$('#search').on('click', function() {
    $.ajax({
        url: 'https://api.binderbyte.com/v1/track?api_key=12713d295bf149156fc8aef5a41b4cefabfb999c0ec82273d4dc53e30cc680a1',
        type: 'get',
        dataType: 'json',
        data: {
            'courier': $('#courier_input').val(),
            'awb': $('#awb_input').val()
        },

        success: function(result) {
            if(result.status == 200) {
                console.log(result);
                let resi = result.data;
                console.log(resi);
                $('#resi-status').html(`
                    <div class = "col-md-8">
                        <div>`+ "STATUS PENGIRIMAN" +`</div>
                        <table class= "table table-bordered">
                        <tbody>
                            <tr>
                                <th scope = "row">` + "STATUS" + `</th>
                                <td>` + resi.summary.status + `</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope = "row">` + "LAYANAN" + `</th>
                                <td>` + resi.summary.courier + `</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope = "row">` + "WAKTU" + `</th>
                                <td>` + resi.summary.date + `</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope = "row">` + "ASAL" + `</th>
                                <td>` + resi.detail.origin + `</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope = "row">` + "PENERIMA" + `</th>
                                <td>` + resi.detail.receiver + `</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope = "row">` + "TUJUAN" + `</th>
                                <td>` + resi.detail.destination + `</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    `)
            }

            else {
                $('#resi-result').html (`
                    <div class="col">
                        <h1 class="text-center">` + result.message + `</h1>
                    </div>
                `)
            }
        }
    });
});