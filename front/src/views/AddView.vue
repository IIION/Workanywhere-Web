<!-- 시트 및 이메일 발송 테스트용 페이지 입니다. -->

<template>
	<div class="container">
		<div class="row">
			<main role="main">
				<div class="container">
					<div v-if="showMsg" role="alert">
						{{message}}
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div>
						<form @submit.prevent="addRow">
							<div>
								<div>
									<label for="name">Name</label>
									<input type="text" v-model="name" class="form-control" id="name" placeholder="홍길동" required>
								</div>
								<div>
									<label for="phone">Phone</label>
									<input type="text" v-model="phone" class="form-control" id="phone" placeholder="010-0000-0000" required>
								</div>
								<div>
									<label for="recipient">Email 주소</label>
									<input type="text" v-model="recipient" class="form-control" id="recipient" placeholder="abcd@gmail.com" required>
								</div>
								<div>
									<label for="code">Code</label>
									<input type="text" v-model="code" class="form-control" id="code" placeholder="ex: 1234" required>
								</div>
								<div>
									<label for="">.</label>
									<button type="submit">SUBMIT</button>
								</div>
								
							</div>		
						</form>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
	const { GoogleSpreadsheet } = require('google-spreadsheet');
	const creds = require('@/client_secret.json');
	export default {
		name: "AddRow",
		data() {
			return {
				name: '',
				phone: '',
				address: '',
				code: '',
				showMsg : false,
				message: '',
			}
		},
		methods: {
			async addRow() {
				const newRow = {
					Name: this.name,
					Phone: this.phone,
					Recipient: this.recipient,
					Code: this.code,
				}
				const doc = new GoogleSpreadsheet('1VLBpwFv_1_eB-MTnSQ-_EDFv9SDmuUl1NWgwa-dF8iU');
				await doc.useServiceAccountAuth(creds);
				await doc.loadInfo(); 
				const sheet = doc.sheetsByIndex[0];
				await sheet.addRow(newRow);
				
				this.name = '';
				this.phone = '';
				this.address = '';
				this.code = '';
				this.message = "New row added !";
				this.showMsg = true;
			}
		}
	}
</script>

<style scoped>
</style>