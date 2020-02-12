<!--PUT THIS IN HEADER-->
<link rel="stylesheet" href="assets/css/chosen.css">



<div class="container form-marged section-row">
					<div class="row">
						<form action="index.html" method="get" accept-charset="utf-8">
							<div class="col-md-4" data-animation-name="fadeInLeft">
								<div class="form-one grouped-form clearfix">
									<h2>REQUEST A CONSULTATION</h2>
									<div class="form-group">
									    <input type="text" class="form-control" id="dev_name" placeholder="Name">
									</div>
									<div class="form-group">
									    <input type="text" class="form-control" id="dev_surname" placeholder="Surname">
									</div>
								</div>
							</div>
							<div class="col-md-4" data-animation-name="fadeInLeft">
								<div class="form-two grouped-form clearfix">
									<h2>TREATMENTS</h2>
									<div class="row mg-t-md">
										<!--<div class="col-md-6">
											<div class="form-group row_num">
												<span>1.</span>
											   	<input type="text" class="form-control dev_date_picker" placeholder="Date">
											</div>
											<div class="form-group row_num">
												<span>2.</span>
											    <input type="text" class="form-control dev_date_picker" placeholder="Date">
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
											    <input type="text" class="form-control dev_time_picker" placeholder="Time">
											</div>
											<div class="form-group">
											    <input type="text" class="form-control dev_time_picker" placeholder="Time">
											</div>
										</div>-->
										<div class="col-md-12">
											<select data-placeholder="Click all that apply..." style="width:350px;" multiple class="chosen-select">
											<option value="test">Total Wellness</option>
											<option value="test">Smile Evaluation</option>
											<option value="test">Implants</option>
											<option value="test">Orthodontics</option>
											<option value="test">Dental Cleaning</option>
											<option value="test">New Patient Appointment</option>
											</optgroup>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4" data-animation-name="fadeInLeft">
								<div class="form-three grouped-form clearfix">
									<h2>OTHER INFORMATION</h2>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
											   	<input type="text" class="form-control" placeholder="Phone">
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group clearfix">
											   	<input type="email" class="form-control" placeholder="Email">
											</div>
											<div class="form-group">
											      <button type="submit">Request Now</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>



				<!--PUT THIS IN FOOTER-->
<script type="text/javascript" src="assets/js/chosen.jquery.js"></script>
	<script>
		$(".chosen-select").chosen(); 
	</script>
	<style>
	.chosen-container{
	width:100% !important;
	}
	.mg-t-md{margin: 45px -15px;}</style>