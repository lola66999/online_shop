import { Search } from "lucide-react";
import { Flex, Switch, Badge } from "antd";
import { createStyles } from "antd-style";
import { Bell } from "lucide-react";
import avatar from "../assets/png/avatar (2).png";

const useStyle = createStyles((props) => {
  const { cssVar, prefixCls, css } = props;
  return {
    root: css`
      width: 40px;
      background-color: ${cssVar.colorPrimary};
    `,
    muiRoot: css`
      min-width: 32px;
      height: 14px;
      line-height: 14px;
      &&.${prefixCls}-switch-checked {
        background-color: rgba(76, 175, 80, 0.5);
        .${prefixCls}-switch-handle {
          inset-inline-start: calc(100% - 17px);
        }
      }
    `,
    muiIndicator: css`
      top: -3px;
      width: 20px;
      height: 20px;
      &&& {
        inset-inline-start: -3px;
      }
      &&&::before {
        background-color: rgb(76, 175, 80);
        border-radius: 999px;
        box-shadow:
          rgba(0, 0, 0, 0.2) 0 2px 1px -1px,
          rgba(0, 0, 0, 0.14) 0 1px 1px 0,
          rgba(0, 0, 0, 0.12) 0 1px 4px 0;
      }
    `,
  };
});

const stylesObject = {
  root: {
    backgroundColor: "#F5D2D2",
  },
};

const stylesFn = (info) => {
  if (info.props.size === "medium") {
    return {
      root: {
        backgroundColor: "#BDE3C3",
      },
    };
  }
  return {};
};

function Header() {
  const { styles: classNames } = useStyle();

  return (
    <>
      <div className="max-h-106">
        <div className="flex justify-between items-center w-full px-6">
          <div>
            <h1 className="font-['Lato'] font-bold text-[22px] leading-none tracking-[0.5%] text-[#023337]">
              Dashboard
            </h1>
          </div>

          <div className="flex place-items-center ml-100">
            <div className="flex items-center w-101.75 h-12 gap-1.5 p-1.5 rounded-[30px] border border-gray-300 opacity-100 mr-3">
              <input
                type="text"
                placeholder="Search data, users, or reports"
                className="w-full h-full bg-transparent outline-none text-sm placeholder-gray-400"
              />
              <Search className="h-5 w-5 text-gray-400 ml-2 shrink-0" />
            </div>
            <div className="flex gap-3">
              <div className="mr-5">
                <Badge count={5} offset={[10, 10]}>
                  <Bell size={28} />
                </Badge>
              </div>

              <div>
                <Switch
                  size="medium"
                  checkedChildren="on"
                  unCheckedChildren="off"
                  styles={stylesFn}
                  classNames={classNames}
                />
              </div>

              <img src={avatar} className="w-8 h-8 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
