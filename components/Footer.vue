<script lang="ts" setup>
import { IApp } from '~/utils/app'
const app = useState<IApp>('app')
</script>

<template>
	<div class="footer-module mt-auto bg-light">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6">
					<ul class="nav mx-auto">
						<li class="nav-item">
							<NuxtLink to="/imprint">
								Imprint
							</NuxtLink>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="">Privacy</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="">Contact</a>
						</li>
					</ul>
				</div>
				<div class="col-12 col-md-6">
					<ul class="nav mx-auto">
						<li class="nav-item">
							<a class="nav-link" href="">{{ app.name }}, {{ app.author.name }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>



