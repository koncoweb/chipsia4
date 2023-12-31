// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ijbX9dfpBRbW1FGSgs1NJo
// Component: 38U0KJJ_izLvF0

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: z08NHQzGDufhl_/component
import TextInput from "../../TextInput"; // plasmic-import: AiDWqAyaT_P6ZS/component

import { useScreenVariants as useScreenVariantsbvEuI4Yp87Tgs } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BV_euI4yp87tgs/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chipsia.module.css"; // plasmic-import: ijbX9dfpBRbW1FGSgs1NJo/projectcss
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: 38U0KJJ_izLvF0/css

import LogoChipsiasvgIcon from "./icons/PlasmicIcon__LogoChipsiasvg"; // plasmic-import: Nnqp58GAr/icon
import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: vIBh7hkedAKVLS/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: L-TyCxvo3pUf7i/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: P9G33GzWUNBCvN/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 0IKgn9gTvXS9bL/icon
import ProfileIcon from "./icons/PlasmicIcon__Profile"; // plasmic-import: YKKd77i4LWr2Gd/icon
import MoneySvgrepoComsvgIcon from "./icons/PlasmicIcon__MoneySvgrepoComsvg"; // plasmic-import: ra_o6xwOHS/icon

createPlasmicElementProxy;

export type PlasmicNavBar__VariantMembers = {
  filled: "filled";
  searchOpen: "searchOpen";
};
export type PlasmicNavBar__VariantsArgs = {
  filled?: SingleBooleanChoiceArg<"filled">;
  searchOpen?: SingleBooleanChoiceArg<"searchOpen">;
};
type VariantPropType = keyof PlasmicNavBar__VariantsArgs;
export const PlasmicNavBar__VariantProps = new Array<VariantPropType>(
  "filled",
  "searchOpen"
);

export type PlasmicNavBar__ArgsType = {};
type ArgPropType = keyof PlasmicNavBar__ArgsType;
export const PlasmicNavBar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavBar__OverridesType = {
  root?: p.Flex<"section">;
  homeButton?: p.Flex<typeof Button>;
  searchButton?: p.Flex<typeof Button>;
  searchInput?: p.Flex<typeof TextInput>;
  profileButton?: p.Flex<typeof Button>;
  becomePartnerButton?: p.Flex<typeof Button>;
};

export interface DefaultNavBarProps {
  filled?: SingleBooleanChoiceArg<"filled">;
  searchOpen?: SingleBooleanChoiceArg<"searchOpen">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavBar__RenderFunc(props: {
  variants: PlasmicNavBar__VariantsArgs;
  args: PlasmicNavBar__ArgsType;
  overrides: PlasmicNavBar__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "filled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.filled
      },
      {
        path: "searchOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.searchOpen
      },
      {
        path: "searchInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries,
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbvEuI4Yp87Tgs()
  });

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        { [sty.rootsearchOpen]: hasVariant($state, "searchOpen", "searchOpen") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox___37Jxn, {
          [sty.freeBoxfilled___37JxNs6Xl3]: hasVariant(
            $state,
            "filled",
            "filled"
          ),
          [sty.freeBoxsearchOpen___37JxNldgct]: hasVariant(
            $state,
            "searchOpen",
            "searchOpen"
          )
        })}
      >
        <Button
          data-plasmic-name={"homeButton"}
          data-plasmic-override={overrides.homeButton}
          link={`/`}
          showStartIcon={true}
          size={"large" as const}
          startIcon={
            <LogoChipsiasvgIcon
              className={classNames(projectcss.all, sty.svg__wDsl, {
                [sty.svgfilled__wDsls6Xl3]: hasVariant(
                  $state,
                  "filled",
                  "filled"
                )
              })}
              role={"img"}
            />
          }
          submitsForm={true}
        >
          {true ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xmpB
              )}
            >
              {"Chipsia"}
            </div>
          ) : null}
        </Button>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ctv7L, {
            [sty.freeBoxsearchOpen__ctv7Lldgct]: hasVariant(
              $state,
              "searchOpen",
              "searchOpen"
            )
          })}
        >
          {(hasVariant($state, "searchOpen", "searchOpen") ? false : true) ? (
            <Button
              data-plasmic-name={"searchButton"}
              data-plasmic-override={overrides.searchButton}
              className={classNames("__wab_instance", {
                [sty.searchButtonsearchOpen]: hasVariant(
                  $state,
                  "searchOpen",
                  "searchOpen"
                )
              })}
              link={`/product`}
              startIcon={
                <SearchIcon
                  className={classNames(projectcss.all, sty.svg___1R1Ys)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3PyJc
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Products"}
                  </span>
                </React.Fragment>
              </div>
            </Button>
          ) : null}
          {(hasVariant($state, "searchOpen", "searchOpen") ? true : true) ? (
            <TextInput
              data-plasmic-name={"searchInput"}
              data-plasmic-override={overrides.searchInput}
              className={classNames("__wab_instance", sty.searchInput, {
                [sty.searchInputsearchOpen]: hasVariant(
                  $state,
                  "searchOpen",
                  "searchOpen"
                )
              })}
              onChange={(...eventArgs) => {
                p.generateStateOnChangeProp($state, ["searchInput", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"Search..." as const}
              value={
                p.generateStateValueProp($state, ["searchInput", "value"]) ?? ""
              }
            />
          ) : null}
          <Button
            data-plasmic-name={"profileButton"}
            data-plasmic-override={overrides.profileButton}
            iconOnly={
              hasVariant($state, "searchOpen", "searchOpen")
                ? undefined
                : hasVariant(globalVariants, "screen", "mobileOnly")
                ? undefined
                : undefined
            }
            link={
              hasVariant($state, "searchOpen", "searchOpen")
                ? `/articles`
                : `/articles`
            }
            startIcon={
              <ProfileIcon
                className={classNames(projectcss.all, sty.svg__ps6Ag)}
                role={"img"}
              />
            }
            submitsForm={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__phzlq,
                {
                  [sty.textsearchOpen__phzlqldgct]: hasVariant(
                    $state,
                    "searchOpen",
                    "searchOpen"
                  )
                }
              )}
            >
              {hasVariant($state, "searchOpen", "searchOpen")
                ? "News"
                : hasVariant(globalVariants, "screen", "mobileOnly")
                ? "News"
                : "News"}
            </div>
          </Button>
          <div className={classNames(projectcss.all, sty.freeBox___8QjTs)}>
            <Button
              data-plasmic-name={"becomePartnerButton"}
              data-plasmic-override={overrides.becomePartnerButton}
              colors={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? ("blue" as const)
                  : ("blue" as const)
              }
              link={`/partnership`}
              onClick={async event => {
                const $steps = {};
                $steps["goToPartnership"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "navigation",
                            interactionUuid: "iP7eqHpXZ",
                            componentUuid: "38U0KJJ_izLvF0",
                            argName: "destination"
                          },
                          () => `/partnership`
                        )
                      };
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "navigation",
                          interactionUuid: "iP7eqHpXZ",
                          componentUuid: "38U0KJJ_izLvF0"
                        },
                        () =>
                          (({ destination }) => {
                            __nextRouter?.push(destination);
                          })?.apply(null, [actionArgs]),
                        actionArgs
                      );
                    })()
                  : undefined;
                if (
                  typeof $steps["goToPartnership"] === "object" &&
                  typeof $steps["goToPartnership"].then === "function"
                ) {
                  $steps["goToPartnership"] = await __wrapUserPromise(
                    {
                      type: "InteractionLoc",
                      actionName: "navigation",
                      interactionUuid: "iP7eqHpXZ",
                      componentUuid: "38U0KJJ_izLvF0"
                    },
                    $steps["goToPartnership"]
                  );
                }
              }}
              rounded={true}
              showStartIcon={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? undefined
                  : true
              }
              startIcon={
                <MoneySvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__ssZfD)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ztTif,
                  {
                    [sty.textfilled__ztTifs6Xl3]: hasVariant(
                      $state,
                      "filled",
                      "filled"
                    )
                  }
                )}
              >
                {hasVariant($state, "filled", "filled")
                  ? "1"
                  : "Partnership Opportunity"}
              </div>
            </Button>
          </div>
        </p.Stack>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "homeButton",
    "searchButton",
    "searchInput",
    "profileButton",
    "becomePartnerButton"
  ],
  homeButton: ["homeButton"],
  searchButton: ["searchButton"],
  searchInput: ["searchInput"],
  profileButton: ["profileButton"],
  becomePartnerButton: ["becomePartnerButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  homeButton: typeof Button;
  searchButton: typeof Button;
  searchInput: typeof TextInput;
  profileButton: typeof Button;
  becomePartnerButton: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavBar__VariantsArgs;
    args?: PlasmicNavBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavBar__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavBar__ArgProps,
          internalVariantPropNames: PlasmicNavBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    homeButton: makeNodeComponent("homeButton"),
    searchButton: makeNodeComponent("searchButton"),
    searchInput: makeNodeComponent("searchInput"),
    profileButton: makeNodeComponent("profileButton"),
    becomePartnerButton: makeNodeComponent("becomePartnerButton"),

    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */
