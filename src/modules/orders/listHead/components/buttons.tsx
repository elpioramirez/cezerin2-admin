import React from "react"
import messages from "lib/text"
import DeleteConfirmation from "modules/shared/deleteConfirmation"
import FontIcon from "material-ui/FontIcon"
import IconButton from "material-ui/IconButton"
import FlatButton from "material-ui/FlatButton"
import RaisedButton from "material-ui/RaisedButton"
import Search from "./search"
const { Fragment } = React

export default class Buttons extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			openDelete: false,
		}
	}

	openDelete = () => {
		this.setState({ openDelete: true })
	}

	closeDelete = () => {
		this.setState({ openDelete: false })
	}

	deleteOrders = () => {
		this.setState({ openDelete: false })
		this.props.onDelete()
	}

	render() {
		const { search, setSearch, selectedCount, onDelete, onCreate } = this.props

		return (
			<Fragment>
				<Search value={search} setSearch={setSearch} />
				{selectedCount > 0 && (
					<Fragment>
						<IconButton
							touch
							tooltipPosition="bottom-left"
							tooltip={messages.actions_delete}
							onClick={this.openDelete}
						>
							<FontIcon color="#fff" className="material-icons">
								delete
							</FontIcon>
						</IconButton>
						<DeleteConfirmation
							open={this.state.openDelete}
							isSingle={false}
							itemsCount={selectedCount}
							onCancel={this.closeDelete}
							onDelete={this.deleteOrders}
						/>
					</Fragment>
				)}
				<IconButton
					touch
					tooltipPosition="bottom-left"
					tooltip={messages.orders_titleAdd}
					onClick={onCreate}
				>
					<FontIcon color="#fff" className="material-icons">
						add
					</FontIcon>
				</IconButton>
			</Fragment>
		)
	}
}
