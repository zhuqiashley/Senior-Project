<!-- ======= TEMPLATE ======= -->
<template>
	<div>
		<custom-header title="Admin Portal"></custom-header>
        <div class="container">
			<Card class="w-100 mt-4">
				<template #body>
					<ul class="nav nav-tabs" id="myTab" role="tablist">
						<li class="nav-item" role="presentation">
							<button class="nav-link active" id="Logs-tab" data-bs-toggle="tab" data-bs-target="#Logs" type="button" role="tab" aria-controls="Logs" aria-selected="true">Logs</button>
						</li>
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="future-tab" data-bs-toggle="tab" data-bs-target="#future" type="button" role="tab" aria-controls="future" aria-selected="false">Future Moderation</button>
						</li>
					</ul>
					<div class="tab-content mt-2" id="myTabContent">
						<div class="tab-pane fade show active" id="Logs" role="tabpanel" aria-labelledby="Logs-tab">
							<div class="table-responsive">
								<table class="table table-hover">
									<tbody>
										<tr>
											<th>LogID</th>
											<th>Log Date</th>
											<th>Log Level</th>
											<th>Log Type</th>
											<th>User Role</th>
											<th>User Name</th>
											<th>Message</th>
										</tr>
									</tbody>
									<tbody>
										<tr v-for="(log, index) in paginatedLogs()" :key="index" class="hover" @click="openDetails(log)">
											<td>{{log.LogID}}</td>
											<td>{{formatDate(log.LogDate)}}</td>
											<td>{{log.LogLevel}}</td>
											<td>{{log.LogType}}</td>
											<td>{{log.Role}}</td>
											<td>{{log.FirstName}} {{log.LastName}}</td>
											<td>{{log.LogMessage.substring(0, 50).trimEnd() + '...'}}</td>
										</tr>
									</tbody>
								</table>
							</div>

							<Pagination v-if="logs.length !== 0" :total-pages="totalPages" :current-page="currentPage" @page-change="pageChange" />
						</div>

						<div class="tab-pane fade show" id="future" role="tabpanel" aria-labelledby="future-tab">Future Moderation Tools Coming Soon...</div>
					</div>
				</template>
			</Card>
		</div>

		<!-- Log Modal -->
		<Modal ref="logModal" size="modal-lg">
			<template #title> Log Information for ID "{{currentLog.LogID}}" </template>
			<template #body>
				<div>
					<strong> Log Date: </strong> {{formatDate(currentLog.LogDate)}}
				</div>
				<div>
					<strong> Log Level: </strong> {{currentLog.LogLevel}}
				</div>
				<div>
					<strong> Log Type: </strong> {{currentLog.LogType}}
				</div>
				<div>
					<strong> User Role: </strong> {{currentLog.Role}}
				</div>
				<div>
					<strong> User Name: </strong> {{currentLog.FirstName}} {{currentLog.LastName}}
				</div>
				<div>
					<strong> Message: </strong> {{currentLog.LogMessage}}
				</div>
			</template>
			<template #footer>
				<div class="form-group text-center">
					<button type="button" class="btn btn-secondary mr-5" data-bs-dismiss="modal" @click="logModal.toggle()">Close</button>&nbsp;
				</div>
			</template>
		</Modal>

    </div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from '../components/Header.vue'
import Card from '../components/Card.vue'
import Modal from '../components/Modal.vue'
import Pagination from '../components/Pagination.vue'
import { ref, onBeforeMount, reactive } from "vue"
import axios from 'axios'

const logDB = 'http://localhost:3001/api/logs';

export default {
	components:
	{
		CustomHeader, Card, Pagination, Modal
	},
	setup() {	
		// Pagination
		const currentPage = ref(1);
		const totalPages = ref(1);
		const pageSize = ref(5);
		
		function pageChange(page) {
			currentPage.value = page;
		}
		
		const logs = ref([]);
		const logModal = ref(null);
		const currentLog = reactive({});

		onBeforeMount(async () => {
			await axios.get(logDB)
				.then(response => {
					logs.value = response.data;
					totalPages.value = Math.ceil(logs.value.length / pageSize.value);
				}).catch(err => {
					console.error(err);
				});
		});

		function paginatedLogs() {
			return logs.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value);
		}

		// format date to be readable (m/dd/yyy hh:mm:ss)
		function formatDate(d){
			const date = new Date(d)
			date.setHours(date.getHours() - 8);
			return date.toLocaleString()
		}

		function openDetails(log) {
			Object.assign(currentLog, log);
			logModal.value.toggle();
		}

		return {
			currentPage, totalPages, pageSize, pageChange, paginatedLogs, logs, formatDate, openDetails, logModal, currentLog
		}
	},
}
</script>

<style>
.nav-link {
	color: #000 !important;
}
.nav-link.active {
	color: #47b2e4 !important;
}
.hover {
	cursor: pointer;
}
</style>