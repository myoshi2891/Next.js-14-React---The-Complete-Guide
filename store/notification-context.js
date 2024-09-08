import { createContext, useState } from "react";

const NotificationContext = createContext({
	notification: null,
	showNotifications: function () {},
	hideNotifications: function () {},
});

export function NotificationContextProvider(props) {
	return (
		<NotificationContext.Provider>
			{props.children}
		</NotificationContext.Provider>
	);
}

export default NotificationContext;
