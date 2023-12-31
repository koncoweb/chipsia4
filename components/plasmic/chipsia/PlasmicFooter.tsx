// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ijbX9dfpBRbW1FGSgs1NJo
// Component: TjbIATQS4AqoQO

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
import CopyrightSocialLanguage from "../../CopyrightSocialLanguage"; // plasmic-import: 8qv09TA5T27G7x/component

import { useScreenVariants as useScreenVariantsbvEuI4Yp87Tgs } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BV_euI4yp87tgs/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chipsia.module.css"; // plasmic-import: ijbX9dfpBRbW1FGSgs1NJo/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: TjbIATQS4AqoQO/css

import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: vIBh7hkedAKVLS/icon
import DeliveryIcon from "./icons/PlasmicIcon__Delivery"; // plasmic-import: GP5-PjIyW7G5XF/icon
import LikeIcon from "./icons/PlasmicIcon__Like"; // plasmic-import: AdceC2wJzWZZT_/icon
import QuestionIcon from "./icons/PlasmicIcon__Question"; // plasmic-import: UfO0_iiCxh-WKt/icon

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"footer">;
  copyrightSocialLanguage?: p.Flex<typeof CopyrightSocialLanguage>;
};

export interface DefaultFooterProps {
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

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbvEuI4Yp87Tgs()
  });

  return (
    <footer
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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___0X4Vb)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__qsqy0)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pjMqz
            )}
          >
            {"Subscribe"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ojfYw
            )}
          >
            {
              "So if you're looking to Profit from Exotic traditional chips, give Chipsia a try and indulge in the delicious flavors of Indonesia!"
            }
          </div>
          <Button
            className={classNames("__wab_instance", sty.button__ckYmx)}
            colors={"black" as const}
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
                          interactionUuid: "eI29SIT6i",
                          componentUuid: "TjbIATQS4AqoQO",
                          argName: "destination"
                        },
                        () => `/partnership`
                      )
                    };
                    return __wrapUserFunction(
                      {
                        type: "InteractionLoc",
                        actionName: "navigation",
                        interactionUuid: "eI29SIT6i",
                        componentUuid: "TjbIATQS4AqoQO"
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
                    interactionUuid: "eI29SIT6i",
                    componentUuid: "TjbIATQS4AqoQO"
                  },
                  $steps["goToPartnership"]
                );
              }
            }}
            submitsForm={true}
          >
            {"Become Partner"}
          </Button>
        </p.Stack>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__cJHcP)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__v3QX2
            )}
          >
            {"Help"}
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__vAsQs)}
          >
            <Button
              link={`/product/export-procedures`}
              showStartIcon={true}
              startIcon={
                <DeliveryIcon
                  className={classNames(projectcss.all, sty.svg__qClp1)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              {"Export Procedures"}
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__xOmYt)}
              link={`/product/why-choose-chipsia`}
              showStartIcon={true}
              startIcon={
                <LikeIcon
                  className={classNames(projectcss.all, sty.svg__czWKd)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cBDuj
                )}
              >
                {"Why Choose Us ?"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__b7V5I)}
              link={"mailto:info@chipsia.com" as const}
              showStartIcon={true}
              startIcon={
                <QuestionIcon
                  className={classNames(projectcss.all, sty.svg__nBuZi)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hSi6P
                )}
              >
                {"Help center"}
              </div>
            </Button>
          </p.Stack>
        </p.Stack>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__nCnz)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__g1Wzn
            )}
          >
            {"More info"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__gHz82)}>
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ttP0E)}
              >
                {true ? (
                  <Button
                    className={classNames("__wab_instance", sty.button__hx0FP)}
                    submitsForm={true}
                  >
                    {"Gift cards"}
                  </Button>
                ) : null}
                <Button
                  className={classNames("__wab_instance", sty.button__vp7Tm)}
                  submitsForm={true}
                >
                  {"Find a store"}
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__u69Zi)}
                  submitsForm={true}
                >
                  {"Careers"}
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button___9Rp4P)}
                  submitsForm={true}
                >
                  {"Sitemap"}
                </Button>
              </p.Stack>
            ) : null}
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ij0N8)}
            >
              {true ? (
                <Button
                  className={classNames("__wab_instance", sty.button__t7GhL)}
                  submitsForm={true}
                >
                  {"Group sales"}
                </Button>
              ) : null}
              <Button
                className={classNames("__wab_instance", sty.button__eUiV)}
                link={`/privacy-policy`}
                submitsForm={true}
              >
                {"Privacy policy"}
              </Button>
              <Button
                className={classNames("__wab_instance", sty.button__s5Wmx)}
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
                              interactionUuid: "Cezm8mmGm",
                              componentUuid: "TjbIATQS4AqoQO",
                              argName: "destination"
                            },
                            () => `/partnership`
                          )
                        };
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "navigation",
                            interactionUuid: "Cezm8mmGm",
                            componentUuid: "TjbIATQS4AqoQO"
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
                        interactionUuid: "Cezm8mmGm",
                        componentUuid: "TjbIATQS4AqoQO"
                      },
                      $steps["goToPartnership"]
                    );
                  }
                }}
                submitsForm={true}
              >
                {"Contact us"}
              </Button>
            </p.Stack>
          </div>
        </p.Stack>
      </p.Stack>
      <CopyrightSocialLanguage
        data-plasmic-name={"copyrightSocialLanguage"}
        data-plasmic-override={overrides.copyrightSocialLanguage}
        className={classNames("__wab_instance", sty.copyrightSocialLanguage)}
      />
    </footer>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "copyrightSocialLanguage"],
  copyrightSocialLanguage: ["copyrightSocialLanguage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "footer";
  copyrightSocialLanguage: typeof CopyrightSocialLanguage;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    copyrightSocialLanguage: makeNodeComponent("copyrightSocialLanguage"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
