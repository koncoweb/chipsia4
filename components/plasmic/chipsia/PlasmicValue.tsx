// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ijbX9dfpBRbW1FGSgs1NJo
// Component: 3bRucgJCclHNht

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chipsia.module.css"; // plasmic-import: ijbX9dfpBRbW1FGSgs1NJo/projectcss
import sty from "./PlasmicValue.module.css"; // plasmic-import: 3bRucgJCclHNht/css

import TakeOffIcon from "./icons/PlasmicIcon__TakeOff"; // plasmic-import: AKOPXxR2JQEa5R/icon
import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: vIBh7hkedAKVLS/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: PS6DVWNrsATME2/icon

createPlasmicElementProxy;

export type PlasmicValue__VariantMembers = {
  topBottom: "topBottom";
  center: "center";
  withButton: "withButton";
};
export type PlasmicValue__VariantsArgs = {
  topBottom?: SingleBooleanChoiceArg<"topBottom">;
  center?: SingleBooleanChoiceArg<"center">;
  withButton?: SingleBooleanChoiceArg<"withButton">;
};
type VariantPropType = keyof PlasmicValue__VariantsArgs;
export const PlasmicValue__VariantProps = new Array<VariantPropType>(
  "topBottom",
  "center",
  "withButton"
);

export type PlasmicValue__ArgsType = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  children2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicValue__ArgsType;
export const PlasmicValue__ArgProps = new Array<ArgPropType>(
  "children",
  "icon",
  "children2"
);

export type PlasmicValue__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultValueProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  children2?: React.ReactNode;
  topBottom?: SingleBooleanChoiceArg<"topBottom">;
  center?: SingleBooleanChoiceArg<"center">;
  withButton?: SingleBooleanChoiceArg<"withButton">;
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

function PlasmicValue__RenderFunc(props: {
  variants: PlasmicValue__VariantsArgs;
  args: PlasmicValue__ArgsType;
  overrides: PlasmicValue__OverridesType;
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
        path: "topBottom",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.topBottom
      },
      {
        path: "center",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.center
      },
      {
        path: "withButton",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withButton
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

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootcenter]: hasVariant($state, "center", "center"),
          [sty.roottopBottom]: hasVariant($state, "topBottom", "topBottom"),
          [sty.rootwithButton]: hasVariant($state, "withButton", "withButton")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox___8Z7XD, {
          [sty.freeBoxcenter___8Z7XD9Gc23]: hasVariant(
            $state,
            "center",
            "center"
          ),
          [sty.freeBoxtopBottom___8Z7XDrlAjE]: hasVariant(
            $state,
            "topBottom",
            "topBottom"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.freeBox__qmYin)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <TakeOffIcon
                className={classNames(projectcss.all, sty.svg__c0Qm5)}
                role={"img"}
              />
            ),

            value: args.icon
          })}
        </div>
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__oZxR9, {
          [sty.freeBoxcenter__oZxR99Gc23]: hasVariant(
            $state,
            "center",
            "center"
          ),
          [sty.freeBoxwithButton__oZxR9Ae0Mt]: hasVariant(
            $state,
            "withButton",
            "withButton"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__x1Vyf
                )}
              >
                {"Worldwide Shipping"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xU3Hb
                )}
              >
                {"Special financing and earn rewards."}
              </div>
            </React.Fragment>
          ),
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrencenter]: hasVariant(
              $state,
              "center",
              "center"
            )
          })
        })}
      </p.Stack>
      {(hasVariant($state, "withButton", "withButton") ? true : false) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__bmQo, {
            [sty.freeBoxcenter__bmQo9Gc23]: hasVariant(
              $state,
              "center",
              "center"
            ),
            [sty.freeBoxwithButton__bmQOae0Mt]: hasVariant(
              $state,
              "withButton",
              "withButton"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Button
                className={classNames("__wab_instance", sty.button__mDjB, {
                  [sty.buttonwithButton__mDjBae0Mt]: hasVariant(
                    $state,
                    "withButton",
                    "withButton"
                  )
                })}
                colors={"black" as const}
                endIcon={
                  <RightArrowIcon
                    className={classNames(projectcss.all, sty.svg__pj170)}
                    role={"img"}
                  />
                }
                rounded={true}
                size={"large" as const}
                submitsForm={true}
              >
                {"Read our letter"}
              </Button>
            ),
            value: args.children2,
            className: classNames(sty.slotTargetChildren2, {
              [sty.slotTargetChildren2center]: hasVariant(
                $state,
                "center",
                "center"
              ),
              [sty.slotTargetChildren2withButton]: hasVariant(
                $state,
                "withButton",
                "withButton"
              )
            })
          })}
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValue__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValue__VariantsArgs;
    args?: PlasmicValue__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicValue__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicValue__ArgsType,
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
          internalArgPropNames: PlasmicValue__ArgProps,
          internalVariantPropNames: PlasmicValue__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicValue__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValue";
  } else {
    func.displayName = `PlasmicValue.${nodeName}`;
  }
  return func;
}

export const PlasmicValue = Object.assign(
  // Top-level PlasmicValue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicValue
    internalVariantProps: PlasmicValue__VariantProps,
    internalArgProps: PlasmicValue__ArgProps
  }
);

export default PlasmicValue;
/* prettier-ignore-end */
