<template>
	<div class="footer-module mt-auto bg-light">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<ul class="nav">
						<li class="nav-item">
							<a class="nav-link" href="">Imprint</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="">Privacy</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>


<script setup>

</script>

<style lang="scss">
/* FOOTER MODUL */

.footer-module {
    box-shadow: 0 2px 15px #918d8d;
    z-index: 20;
    position: fixed;
    bottom: 0;
    transition: bottom 0.2s ease-in-out;
    width: 100%;
    ul.nav {
        white-space: nowrap;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: flex-start;
    }
    .nav-link {
        padding: 0.5rem 0.5rem;
    }
    .nav-item {
        &:first-of-type {
            .nav-link {
                padding-left: 0;
            }
        }
        &:last-of-type {
            .nav-link {
                padding-right: 0;
            }
        }
    }
}

// footer für die stellendetail ansichten "external" und "preview"
.footer-module-external {
    .nav {
        justify-content: center;
    }
}

// small VP
@media (max-width: 515px) {
    .footer-module {
        ul.nav {
            align-items: center;
            justify-content: center;
            flex-direction: row;
            font-size: 12px;
            white-space: nowrap;
            flex-wrap: nowrap;
        }
    }
}

//iPhone 6 to X
@media (max-width: 425px) {
    .footer-module {
        ul.nav {
            flex-wrap: nowrap;
            font-size: 9px;
        }
    }
}

	
</style>