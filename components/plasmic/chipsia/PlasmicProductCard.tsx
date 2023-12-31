// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ijbX9dfpBRbW1FGSgs1NJo
// Component: be4gyluQ_9OJzR

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
import Rating from "../../Rating"; // plasmic-import: JRf21XH4cTf7V-/component

import { useScreenVariants as useScreenVariantsbvEuI4Yp87Tgs } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BV_euI4yp87tgs/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chipsia.module.css"; // plasmic-import: ijbX9dfpBRbW1FGSgs1NJo/projectcss
import sty from "./PlasmicProductCard.module.css"; // plasmic-import: be4gyluQ_9OJzR/css

import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: vIBh7hkedAKVLS/icon

createPlasmicElementProxy;

export type PlasmicProductCard__VariantMembers = {
  small: "small";
};
export type PlasmicProductCard__VariantsArgs = {
  small?: SingleBooleanChoiceArg<"small">;
};
type VariantPropType = keyof PlasmicProductCard__VariantsArgs;
export const PlasmicProductCard__VariantProps = new Array<VariantPropType>(
  "small"
);

export type PlasmicProductCard__ArgsType = {
  tags?: React.ReactNode;
  children?: React.ReactNode;
  link?: string;
  rating?: React.ReactNode;
  img?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  onEntryidvarChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicProductCard__ArgsType;
export const PlasmicProductCard__ArgProps = new Array<ArgPropType>(
  "tags",
  "children",
  "link",
  "rating",
  "img",
  "onEntryidvarChange"
);

export type PlasmicProductCard__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  column?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultProductCardProps {
  tags?: React.ReactNode;
  children?: React.ReactNode;
  link?: string;
  rating?: React.ReactNode;
  img?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  onEntryidvarChange?: (val: string) => void;
  small?: SingleBooleanChoiceArg<"small">;
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

function PlasmicProductCard__RenderFunc(props: {
  variants: PlasmicProductCard__VariantsArgs;
  args: PlasmicProductCard__ArgsType;
  overrides: PlasmicProductCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          img: {
            src: "/plasmic/chipsia/images/shoe14.png",
            fullWidth: 840,
            fullHeight: 840,
            aspectRatio: undefined
          }
        },
        props.args
      ),
    [props.args]
  );

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
        path: "small",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.small
      },
      {
        path: "entryidvar",
        type: "readonly",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return undefined;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return {};
              }
              throw e;
            }
          })(),

        onChangeProp: "onEntryidvarChange"
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

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbvEuI4Yp87Tgs()
  });

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        { [sty.rootsmall]: hasVariant($state, "small", "small") }
      )}
      component={Link}
      platform={"nextjs"}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <div
        data-plasmic-name={"column"}
        data-plasmic-override={overrides.column}
        className={classNames(projectcss.all, sty.column)}
      >
        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(projectcss.all, projectcss.a, sty.link, {
            [sty.linksmall]: hasVariant($state, "small", "small")
          })}
          component={Link}
          href={args.link}
          platform={"nextjs"}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"256px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"none" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"256px" as const}
            displayWidth={"256px" as const}
            src={args.img}
          />

          {(
            hasVariant($state, "small", "small") && triggers.hover_root
              ? true
              : true
          ) ? (
            <div
              className={classNames(projectcss.all, sty.freeBox___0CEB, {
                [sty.freeBoxsmall___0CEBudi3Z]: hasVariant(
                  $state,
                  "small",
                  "small"
                )
              })}
            />
          ) : null}
          {(hasVariant($state, "small", "small") ? true : true) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__qjahZ, {
                [sty.freeBoxsmall__qjahZudi3Z]: hasVariant(
                  $state,
                  "small",
                  "small"
                )
              })}
            >
              <div className={classNames(projectcss.all, sty.freeBox___6E0Wf)}>
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <Button
                      colors={"lightGray" as const}
                      size={"small" as const}
                      submitsForm={true}
                    >
                      {"New"}
                    </Button>
                  ),
                  value: args.tags
                })}
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <Rating
                      className={classNames(
                        "__wab_instance",
                        sty.rating__mmCpU
                      )}
                    />
                  ),

                  value: args.rating
                })}
              </div>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__e7RnT)}
              >
                {p.renderPlasmicSlot({
                  defaultContents: (
                    <React.Fragment>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__kwlSr
                        )}
                      >
                        {"Product name"}
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__dd05
                        )}
                      >
                        {"If you can dream it, you can build it."}
                      </div>
                    </React.Fragment>
                  ),
                  value: args.children
                })}
              </p.Stack>
            </p.Stack>
          ) : null}
        </p.PlasmicLink>
      </div>
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "column", "link", "img"],
  column: ["column", "link", "img"],
  link: ["link", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
  column: "div";
  link: "a";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductCard__VariantsArgs;
    args?: PlasmicProductCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProductCard__ArgsType,
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
          internalArgPropNames: PlasmicProductCard__ArgProps,
          internalVariantPropNames: PlasmicProductCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCard";
  } else {
    func.displayName = `PlasmicProductCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCard = Object.assign(
  // Top-level PlasmicProductCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    column: makeNodeComponent("column"),
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicProductCard
    internalVariantProps: PlasmicProductCard__VariantProps,
    internalArgProps: PlasmicProductCard__ArgProps
  }
);

export default PlasmicProductCard;
/* prettier-ignore-end */
