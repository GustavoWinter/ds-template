{
  description = "Design System with Nix flakes";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }: 
    let
      supportedSystems = [ "x86_64-linux" "aarch64-darwin" "x86_64-darwin" ];
      forAllSystems = f: nixpkgs.lib.genAttrs supportedSystems f;
    in {
      devShells = forAllSystems(system: 
        let
          pkgs = import nixpkgs { inherit system; };
        in {
          default = pkgs.mkShell {
            buildInputs = [
              pkgs.nodejs_22
            ];

            shellHook = ''
              echo "Node.js v22.14.0 environment loaded on ${system}!"
              node --version
            '';
          };
        });
    };
}