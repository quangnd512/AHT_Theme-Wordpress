<?php
	$footer_layout = Themebase::setting('footer_layout');
  	if ($footer_layout === 'wide'){
    	$f_container ='container-fluid';
	}elseif ($footer_layout === 'full_width'){
	    $f_container ='container';
	}else{
	    $f_container ='container-fluid boxed';
	}
?>
<footer id="page-footer" class="footer-default">
    <div class="footers__top">
        <div class="<?php echo esc_attr($f_container); ?> footers__top__grid">
            <div class="row">
                <!-- Contact -->
                <div class="col-xl-4 col-lg-4 col-md-3 col-sm-6 col-xs-12 contacts">
                    <?php get_template_part('templates/footer/medy-top/contacts'); ?>
                </div>
                <!-- Contact -->

                <!-- Company -->
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 companys">
                    <?php get_template_part('templates/footer/medy-top/companys'); ?>
                </div>
                <!-- Company -->

                <!-- Categories -->
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 categories">
                    <?php get_template_part('templates/footer/medy-top/categories'); ?>
                </div>
                <!-- Categories -->

                <!-- Information -->
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 infomations">
                    <?php get_template_part('templates/footer/medy-top/infomations'); ?>
                </div>
                <!-- Information -->
            </div>
        </div>
    </div>
    <div class="footers__bottom">
		<div class="footer-copyright <?php echo esc_attr($f_container); ?>">
			<div class="row">
				<div class="col-md-12">
					<?php if (is_active_sidebar('footer')) { ?>
					<div class="footer-top">
						<?php dynamic_sidebar('footer'); ?>
					</div>
					<?php } ?>
				</div>
				<!-- Copyright -->
                <div class="col-xl-4 col-lg-4 col-md-3 col-sm-12 col-xs-12 copyright">
                    <?php get_template_part('templates/footer/medy-top/copyright'); ?>
                </div>
                <!-- Copyright -->

                <!-- Payments -->
                <div class="col-xl-8 col-lg-8 col-md-9 col-sm-12 col-xs-12 payments">
                    <?php get_template_part('templates/footer/medy-top/payments'); ?>
                </div>
                <!-- Payments -->
			</div>
		</div>
    </div>
</footer>