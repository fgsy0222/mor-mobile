class Data {
    constructor () {
        this.setIndexData()
    }
    
    components = {
        base: {
            name: '基础组件',
            map: {
                layout: { name: 'layout - 布局组件', url: 'layout', desc: '24栅格布局以及flex布局' },
                toast: { name: 'Toast - 提示', url: 'toast', desc: '提示' },
                modal: { name: 'Modal - 弹框', url: 'modal', desc: '支持自定义弹框以及dialog' },
                listView: { name: 'ListView - 列表', url: 'list-view', desc: '支持瀑布流以及下拉刷新' },
                loading: { name: 'Loading - 加载', url: 'loading', desc: '加载中' },
                tabs: { name: 'Tabs - 切换面板', url: 'tabs', desc: '支持手势滑动切换' },
                swiper: { name: 'Swiper - 轮播组件', url: 'swiper', desc: '走马灯，支持自定义wrap' },
                popup: { name: 'popup - 弹层', url: 'popup', desc: '弹层' },
                datePicker: { name: 'DatePicker - 时间日期事件选择器', url: 'date-picker', desc: '自定义时间精度' },
                datePickerRange: { name: 'DatePickerRange - 日期区间选择器', url: 'date-picker-range', desc: '自定义时间精度' },
                modalSelect: { name: 'ModalSelect - 列表数据选择器', url: 'modal-select', desc: '点击选择器' },
                pickerSelect: { name: 'PickerSelect - 列表数据选择器', url: 'picker-select', desc: '滚动选择器' }
            }
        },
        other: {
            name: '其他',
            map: {
                hammer: { name: 'Hammer - 手势库', url: 'hammer', desc: '迷你手势库' },
                pickerView: { name: 'PickerView - 滚动面板', url: 'picker-view' }
            }
        }
    }
    
    setIndexData () {
        this.indexData = []
        this.allData = {}
        for (let v in this.components) {
            let res = {}
            const item = this.components[v]
            res.name = item.name
            let list = []
            for (let i in item.map) {
                list.push(item.map[i])
                this.allData[i] = item.map[i]
            }
            res.list = list
            this.indexData.push(res)
        }
    }
    
    getIndexData () {
        return this.indexData
    }
    
    getComponentItemInfo (name) {
        return this.allData[name]
    }
}

export default new Data
