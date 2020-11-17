<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%;margin-top:5px"
            border
            @cell-click="rowClick"
        >
            <el-table-column
                type="index"
                label="序号"
                width="60"
            />
            <el-table-column
                prop="date"
                label="日期"
                width="180"
            >
                <template v-slot="{row}">
                    <row-element k="date" :row="row" :now-id.sync="nowId" :cell="cell" />
                </template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180"
            >
                <template v-slot="{row}">
                    <row-element k="name" :row="row" :now-id.sync="nowId" :cell="cell" />
                </template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
            >
                <template v-slot="{row}">
                    <row-element k="address" :row="row" :now-id.sync="nowId" :cell="cell" />
                </template>
            </el-table-column>
            <el-table-column
                prop="option"
                label="操作"
            >
                <el-button type="danger">删除</el-button>
                <!--            <he> <el-button type="primary">编辑</el-button>-->
                <!--                <el-button type="danger">删除</el-button></he>-->
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
// import He from './HelloWorld'
// import RowElement from "./RowElement";
import Http from '@/service/Http'
const RowElement = {
    props: {
        row: {
            type: Object,
            default: () => {}
        },
        k: {
            type: String,
            default: ''
        },
        nowId: {
            type: Number,
            default: 0
        },
        cell: {
            type: String,
            default: ''
        }
    },
    updated() {
        if (this.$refs.input && this.cell == this.k) this.$refs.input.focus()
    },
    methods: {
        doBlur({ target: { value }}) {
            this.$emit('update:nowId', 0)
            Http.post('/ycl/saveTableData', this.row).then(({ data }) => {
                this.$message(data)
                this.$refs.contentText.innerHTML = this.row[this.k]
            })
        }
    },
    template: `
            <div>
                <el-input ref="input" v-model="row[k]" @blur="doBlur" v-show="k === cell && nowId === row.id"></el-input>
                <span ref="contentText" v-show="k !== cell || nowId !== row.id">{{row[k]}}</span>
            </div>`
}
const Table = {
    name: 'tables',
    data() {
        return {
            nowId: 0,
            cell: '',
            tableData: []
        }
    },
    mounted() {
        Http.get('/ycl/getTableData').then(({ data }) => {
            this.tableData = data
        })
    },
    methods: {
        rowClick(...param) {
            this.nowId = param[0].id
            this.cell = param[1].property
        }
    },
    components: {
        // He
        RowElement
    }
}
export default Table
</script>
