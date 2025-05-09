import React from "react";

const DashboardIcon = <i className="bx bx-home side-menu__icon"></i>;

const PagesIcon = <i className="bx bx-file-blank side-menu__icon"></i>;

const TaskIcon = <i className="bx bx-task side-menu__icon"></i>;

const AuthenticationIcon = (
  <i className="bx bx-fingerprint side-menu__icon"></i>
);

const ErrorIcon = <i className="bx bx-error side-menu__icon"></i>;

const UiElementsIcon = <i className="bx bx-box side-menu__icon"></i>;

const Utilities = <i className="bx bx-medal side-menu__icon"></i>;

const FormsIcon = <i className="bx bx-file  side-menu__icon"></i>;

const AdvancedUiIcon = <i className="bx bx-party side-menu__icon"></i>;

const WidgetsIcon = <i className="bx bx-gift side-menu__icon"></i>;

const AppsIcon = <i className="bx bx-grid-alt side-menu__icon"></i>;

const NestedmenuIcon = <i className="bx bx-layer side-menu__icon"></i>;

const TablesIcon = <i className="bx bx-table side-menu__icon"></i>;

const ChartsIcon = <i className="bx bx-bar-chart-square side-menu__icon"></i>;

const MapsIcon = <i className="bx bx-map side-menu__icon"></i>;

const Icons = <i className="bx bx-store-alt side-menu__icon"></i>;

const CategoryIcon = <i className="bx bx-category side-menu__icon"></i>;

const ProductIcon = <i className="bx bx-package side-menu__icon"></i>;

const TransactionIcon = <i className="bx bx-transfer-alt side-menu__icon"></i>;

const LeadIcon = <i className="bx bx-user-plus side-menu__icon"></i>;

const UserIcon = <i className="bx bx-user side-menu__icon"></i>;

const badge = (
  <span className="badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-1">
    12
  </span>
);
const badge1 = (
  <span className="text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-1">
    New
  </span>
);
const badge2 = (
  <span className="text-danger text-[0.75em] rounded-sm badge !py-[0.25rem] !px-[0.45rem] !bg-danger/10 ms-1">
    Hot
  </span>
);
const badge4 = (
  <span className="text-success text-[0.75em] badge !py-[0.25rem] !px-[0.45rem] rounded-sm bg-success/10 ms-1">
    3
  </span>
);

export const MenuItems: any = [
  {
    menutitle: "MAIN",
  },

  {
    icon: DashboardIcon,
    badgetxt: badge,
    title: "Dashboards",
    type: "link",
    path: "/dashboards/analytics",
    active: false,
    selected: false,
    dirchange: false
  },

 

  // {
  //   menutitle: "PAGES",
  // },

  // {
  //   icon: PagesIcon,
  //   badgetxt: badge1,
  //   title: "Pages",
  //   type: "sub",
  //   active: false,
  //   selected: false,
  //   children: [
  //     {
  //       path: "/pages/about-us",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "About Us",
  //     },
  //     {
  //       title: "Blog",
  //       type: "sub",
  //       active: false,
  //       children: [
  //         {
  //           path: "/pages/blog/blog",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Blog",
  //         },
  //         {
  //           path: "/pages/blog/blog-details",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Blog-Details",
  //         },
  //         {
  //           path: "/pages/blog/create-blog",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Create-Blog",
  //         },
  //       ],
  //     },
  //     {
  //       path: "/pages/chat",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Chat",
  //     },
  //     {
  //       path: "/pages/contacts",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Contacts",
  //     },
  //     {
  //       path: "/pages/contact-us",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Contact-Us",
  //     },
  //     {
  //       title: "Ecommerce",
  //       type: "sub",
  //       active: false,
  //       children: [
  //         {
  //           path: "/pages/ecommerce/add-products",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Add Products",
  //         },
  //         {
  //           path: "/pages/ecommerce/cart",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Cart",
  //         },
  //         {
  //           path: "/pages/ecommerce/checkout",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Checkout",
  //         },
  //         {
  //           path: "/pages/ecommerce/edit-products",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Edit Products",
  //         },
  //         {
  //           path: "/pages/ecommerce/order-details",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Order Details",
  //         },
  //         {
  //           path: "/pages/ecommerce/orders",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Orders",
  //         },
  //         {
  //           path: "/pages/ecommerce/products",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Products",
  //         },
  //         {
  //           path: "/pages/ecommerce/product-details",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Product Details",
  //         },
  //         {
  //           path: "/pages/ecommerce/product-list",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Products List",
  //         },
  //         {
  //           path: "/pages/ecommerce/wishlist",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Wishlist",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Email",
  //       type: "sub",
  //       active: false,
  //       children: [
  //         {
  //           path: "/pages/email/mail-app",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Mail-App",
  //         },
  //         {
  //           path: "/pages/email/mail-settings",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Mail-Settings",
  //         },
  //       ],
  //     },
  //     {
  //       path: "/pages/empty",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Empty",
  //     },
  //     {
  //       path: "/pages/faqs",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "FAQ's",
  //     },
  //     {
  //       title: "File Manager",
  //       type: "sub",
  //       menusub: true,
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       children: [
  //         {
  //           path: "/pages/filemanager",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "File Manager",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Invoice",
  //       type: "sub",
  //       menusub: true,
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       children: [
  //         {
  //           path: "/pages/invoice/create-invoice",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Create Invoice",
  //         },
  //         {
  //           path: "/pages/invoice/invoice-details",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Invoice Details",
  //         },
  //         {
  //           path: "/pages/invoice/invoice-list",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Invoice List",
  //         },
  //       ],
  //     },
  //     {
  //       path: "/landing",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Landing",
  //     },
  //     {
  //       path: "/jobs-landing",
  //       badgetxt: badge1,
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Jobs Landing",
  //     },
  //     {
  //       path: "/pages/notifications",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Notifications",
  //     },
  //     {
  //       path: "/pages/pricing",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Pricing",
  //     },
  //     {
  //       path: "/pages/profile",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Profile",
  //     },
  //     {
  //       path: "/pages/reviews",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Reviews",
  //     },
  //     {
  //       path: "/pages/team",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Team",
  //     },
  //     {
  //       path: "/pages/terms&conditions",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Terms & Conditions",
  //     },
  //     {
  //       path: "/pages/timeline",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Timeline",
  //     },
  //     {
  //       path: "/pages/todo-list",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "To Do List",
  //     },
  //   ],
  // },
  // {
  //   icon: TaskIcon,
  //   title: "Task",
  //   badgetxt: badge1,
  //   type: "sub",
  //   active: false,
  //   selected: false,
  //   dirchange: false, 
  //   children: [
  //     {
  //       path: "/task/kanban-board",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Kanban Board",
  //     },
  //     {
  //       path: "/task/list-view",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "List View",
  //     },
  //     {
  //       path: "/task/task-details",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Task Details",
  //     },
  //   ],
  // },
  // {
  //   icon: AuthenticationIcon,
  //   title: " Authentication",
  //   type: "sub",
  //   active: false,
  //   selected: false,
  //   dirchange: false, 
  //   children: [
  //     {
  //       path: "/authentication/coming-soon",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Coming Soon",
  //     },

  //     {
  //       title: "Create Password",
  //       type: "sub",
  //       menusub: true,
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       children: [
  //         {
  //           path: "/authentication/create-password/create-basic",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Basic",
  //         },
  //         {
  //           path: "/authentication/create-password/create-cover",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Cover",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Lock Screen",
  //       type: "sub",
  //       menusub: true,
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       children: [
  //         {
  //           path: "/authentication/lock-screen/screen-basic",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Basic",
  //         },
  //         {
  //           path: "/authentication/lock-screen/screen-cover",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Cover",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Reset Password",
  //       type: "sub",
  //       menusub: true,
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       children: [
  //         {
  //           path: "/authentication/reset-password/reset-basic",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Basic",
  //         },
  //         {
  //           path: "/authentication/reset-password/reset-cover",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Cover",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Sign Up",
  //       type: "sub",
  //       menusub: true,
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       children: [
  //         {
  //           path: "/authentication/sign-up/signup-basic",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Basic",
  //         },
  //         {
  //           path: "/authentication/sign-up/signup-cover",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Cover",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Sign In",
  //       type: "sub",
  //       menusub: true,
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       children: [
  //         {
  //           path: "/authentication/sign-in/signin-basic",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Basic",
  //         },
  //         {
  //           path: "/authentication/sign-in/signin-cover",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Cover",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Two Step Verification",
  //       type: "sub",
  //       menusub: true,
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       children: [
  //         {
  //           path: "/authentication/two-step-verification/two-basic",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Basic",
  //         },
  //         {
  //           path: "/authentication/two-step-verification/two-cover",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           dirchange: false, 
  //           title: "Cover",
  //         },
  //       ],
  //     },
  //     {
  //       path: "/authentication/under-maintanance",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "Under Maintainance",
  //     },
  //   ],
  // },
  // {
  //   icon: ErrorIcon,
  //   title: "Error",
  //   type: "sub",
  //   active: false,
  //   selected: false,
  //   dirchange: false, 
  //   children: [
  //     {
  //       path: "/error/error-401",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "401-Error",
  //     },
  //     {
  //       path: "/error/error-404",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "404-Error",
  //     },
  //     {
  //       path: "/error/error-500",
  //       type: "link",
  //       active: false,
  //       selected: false,
  //       dirchange: false, 
  //       title: "500-Error",
  //     },
  //   ],
  // },

  {
    menutitle: "GENERAL",
  },

  {
    icon: UserIcon,
    title: "Users",
    type: "link",
    path: "/users/users",
    active: false,
    selected: false,
    dirchange: false
  },

  {
    icon: CategoryIcon,
    title: "Category",
    type: "link",
    path: "/category/category",
    active: false,
    selected: false,
    dirchange: false
  },

  {
    icon: ProductIcon,
    title: "Products",
    type: "link",
    path: "/products/products",
    active: false,
    selected: false,
    dirchange: false
  },

  {
    icon: TransactionIcon,
    title: "Transactions",
    type: "link",
    path: "/transactions/transactions",
    active: false,
    selected: false,
    dirchange: false
  },

  {
    icon: LeadIcon,
    title: "Leads",
    type: "link",
    path: "/leads/leads",
    active: false,
    selected: false,
    dirchange: false
  },

 
];
