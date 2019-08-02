import React, { Component } from "react";
import ReactDOM from "react-dom";
import { PullToRefresh, ListView } from "antd-mobile";
import { getList } from "@src/api";
import "./index.less";

class List extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.initData = []; //初始数据
        this.page = 1; //页数
        this.size = 15; //一页最大条数
        this.state = {
            dataSource,
            refreshing: false,
            isLoading: true,
            hasMore: true,
            height: document.documentElement.clientHeight,
        };
    }

    componentDidUpdate() {
        document.body.style.overflow = "hidden";
    }

    componentDidMount() {
        const h = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        this.setState({
            height: h,
        });
        this.loadData();
    }

    onRefresh() {
        this.setState({ refreshing: true, isLoading: true });
        setTimeout(() => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(
                    this.initData,
                    this.genRowIndex()
                ),
                refreshing: false,
                isLoading: false,
            });
        }, 600);
    }
    onEndReached(event) {
        if (!this.state.hasMore) {
            return;
        }
        this.page = ++this.page;
        console.log("reach end", event);
        this.setState({ isLoading: true });
        this.loadData();
        setTimeout(() => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(
                    this.initData,
                    this.genRowIndex()
                ),
                isLoading: false,
            });
        }, 1000);
    }
    genRowIndex() {
        this.initData.map((item, i) => {
            return i;
        });
    }
    loadData() {
        getList(params).then(res => {
            //todo
        });
    }
    renderRow(item, rowID) {
        return (
            <div
                className="data-row"
                key={rowID}
                data-province={item.province}
                data-city={item.city}
                data-type={item.type}
                data-id={item.id}
                data-name={item.name}
            />
        );
    }
    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: "#F5F5F9",
                    height: 1,
                }}
            />
        );
        return (
            <div className="List">
                <ListView
                    ref={el => (this.ptr = el)}
                    dataSource={this.state.dataSource}
                    renderFooter={() => (
                        <div style={{ padding: 10, textAlign: "center" }}>
                            {this.state.isLoading
                                ? "加载中..."
                                : this.state.hasMore
                                ? ""
                                : "到底啦^_^"}
                        </div>
                    )}
                    renderRow={(item, rowID) => this.renderRow(item, rowID)}
                    renderSeparator={separator}
                    style={{
                        height: this.state.height,
                    }}
                    pullToRefresh={
                        <PullToRefresh
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh.bind(this)}
                            direction="up"
                            indicator={{ deactivate: "上拉可以刷新" }}
                        />
                    }
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached.bind(this)}
                    onEndReachedThreshold={10}
                />
            </div>
        );
    }
}

export default List;
