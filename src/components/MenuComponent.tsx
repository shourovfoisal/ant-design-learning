import { 
  DashboardOutlined, 
  DollarCircleOutlined, 
  EditOutlined, 
  HomeFilled, 
  MoneyCollectOutlined, 
  RollbackOutlined, 
  UserOutlined, 
  WindowsOutlined 
} from "@ant-design/icons"
import { Input, Menu, Space } from "antd"

type MenuItems = {
  label: string | JSX.Element;
  key: string;
  icon?: JSX.Element;
  children?: MenuItems[];
  type?: string;
  danger?: boolean
}

export const MenuComponent: React.FC = () => {

  const items: MenuItems[] = [
    {
      label: <Input.Search placeholder="Search"></Input.Search>,
      key: "search"
    },
    {
      label: "Home",
      key: "home",
      icon: <HomeFilled />
    },
    {
      label: <span style={{ color: "blueviolet" }}>About</span>,
      key: "about"
    },
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <DashboardOutlined />,
      children: [
        {
          label: "Revenue",
          key: "revenue",
          icon: <DollarCircleOutlined />
        },
        {
          label: "Expenses",
          key: "expenses",
          icon: <MoneyCollectOutlined />
        }
      ]
    },
    {
      label: "User Management",
      key: "user-management",
      icon: <UserOutlined />,
      type: "group",
      children: [
        {
          label: "Edit profile",
          key: "edit-profile",
          icon: <EditOutlined />,
        },
        {
          label: "Manage profile",
          key: "manage-profile",
          icon: <RollbackOutlined />
        }
      ]
    },
    {
      label: "Sign Out",
      key: "signout",
      danger: true,
      icon: <WindowsOutlined />
    }
  ]

  return (
    <Space>
      <Menu
        onClick={(info) => {
          console.log(info.domEvent);
          console.log(info.keyPath);
          console.log(info.key);
        }}
        mode="inline"
        defaultOpenKeys={[ "dashboard" ]}
        items={items}
      />
    </Space>
  )
}
