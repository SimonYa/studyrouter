
//分页对象
class PaginationVo {

    //做初始化
    constructor() {
        //当前页，默认为1
        this._currPage = 1;

        //显示条数，默认为10
        this._pageSize = 10;

        //总页数
        this._totalPage = 1;

        //总条数
        this._totalCount = 10;

        //数据
        this._data = null;
    }

    get currPage() {
        return this._currPage;
    }

    set currPage(currPage) {
        this._currPage = currPage;
    }

    get pageSize() {
        return this._pageSize;
    }

    set pageSize(pageSize) {
        this._pageSize = pageSize;
    }

    get totalPage() {
        return this._totalPage;
    }

    set totalPage(totalPage) {
        this._totalPage = totalPage;
    }

    get totalCount() {
        return this._totalCount;
    }

    set totalCount(totalCount) {
        this._totalCount = totalCount;
    }

    get data() {
        return this._data;
    }

    set data(data) {
        this._data = data;
    }
}

export default PaginationVo;