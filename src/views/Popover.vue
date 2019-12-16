<template>
    <LayoutContainer v-class="['popover']">
        <div class="flex-grow-1 d-flex flex-column justify-center align-center">
            <el-table :data="tableData" border>
                <el-table-column v-for="(item, index) in 30" :key="item" :label="`${item}`">
                    <template slot-scope="scope">
                        <el-popover placement="bottom-start" width="250">
                            <h1>日期: {{ scope.row[`date${index + 1}`] }}</h1>
                            <p>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</p>
                            <el-button size="mini" @click="onCancel(scope.row[`date${index + 1}`])">取消</el-button>
                            <el-button type="primary" size="mini" @click="onConfirm(scope.row[`date${index + 1}`])">
                                确定
                            </el-button>
                            <div slot="reference">
                                <p :id="scope.row[`date${index + 1}`]" style="cursor: pointer">
                                    {{ scope.row[`date${index + 1}`] }}
                                </p>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </LayoutContainer>
</template>

<script>
import LayoutContainer from '../components/layout/LayoutContainer';
import { getTableData } from '../services/table';

export default {
    name: 'Popover',
    components: {
        LayoutContainer
    },
    data() {
        return {
            tableData: []
        };
    },
    created() {
        this.getPageList();
    },
    methods: {
        async getPageList() {
            const data = await getTableData();
            this.tableData = data;
            console.log(data);
        },
        onCancel(id) {
            console.log('cancel');
            document.getElementById(id).click();
        },
        onConfirm(id) {
            console.log('confirm');
            document.getElementById(id).click();
        }
    }
};
</script>

<style module lang="scss">
@import '../styles/variables';
.popover {
    background: #fff;
}
</style>
